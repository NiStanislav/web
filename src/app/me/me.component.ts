import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  public profile;
  constructor(private peopleService: PeopleService) {
   }

  ngOnInit() {
    this.peopleService.getMe()
    .subscribe(data => this.profile = data);
  }

}
