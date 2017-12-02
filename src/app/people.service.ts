import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UserData } from '../app/people/people.component';
// import { User } from '../person/add-person/add-person.component';
import { RequestOptions } from '@angular/http';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  private actionUrl = 'http://services.odata.org/TripPinRESTierService/';
  subject: Subject<UserData> = new Subject();
  results = this.subject.asObservable();
  getPeople() {
    this.http.get(this.actionUrl + 'People').subscribe(data => {
      for (let i = 0; i < data['value'].length; i ++) {
        this.subject.next(data['value'][i]);
      }
    });
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'People');
  }

  public getMe<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl + '/Me');
  }

  public getMyFriends(): Promise<any> {
    return this.http.get(this.actionUrl + '/Me/Friends').toPromise();
  }

  public getMyTrips(): any {
    this.http.get(this.actionUrl + '/Me/Trips').subscribe(data => {
      for (let i = 0; i < data['value'].length; i ++) {
        this.subject.next(data['value'][i]);
      }
    });
  }

  public getPerson<T>(username: String): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'People(\'' + username + '\')');
  }

  public getPersonFriends(username: String) {
    return this.http.get(this.actionUrl + 'People(\'' + username + '\')?$expand=Friends');
  }

  public getPersonTrips(username: String) {
    return this.http.get(this.actionUrl + 'People(\'' + username + '\')?$expand=Trips');
  }

  public getInvolvedPeople(username: String) {
    return this.http.get(this.actionUrl +
       'People(\'' + username + '\')/Trips(0)/Microsoft.OData.Service.Sample.TrippinInMemory.Models.GetInvolvedPeople');
  }

  // public addPerson(user: User){
  //   let body = JSON.stringify(user);
  //   let headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/json');
  //   console.log(body);
  //   this.http.post('http://services.odata.org/TripPinRESTierService/(S(hu4p11ocgenadam2lzvhzyni))/People',
  //                  body, {headers}).subscribe();

  //   console.log(user);
  // }


}
