import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  displayedColumns = ['UserName', 'FirstName', 'LastName', 'Gender'];
  exampleDatabase = new ExampleDatabase(this.peopleService);
  dataSource: ExampleDataSource | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public values: any[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }, 1000);
  }

}

export interface UserData {
  UserName: string;
  FirstName: string;
  LastName: string;
  Gender: string;
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor(private peopleService: PeopleService) {
    this.peopleService.getPeople();
    this.peopleService.results.subscribe((_data) => {
      this.addUser(_data);
    });
  }

  addUser(_data) {
    const copiedData = this.data.slice();
    copiedData.push(_data);
    this.dataChange.next(copiedData);
  }

}


export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
