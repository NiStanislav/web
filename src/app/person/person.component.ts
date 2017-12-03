import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }

    public profile;
    username: String;
    private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['user'];
      console.log(this.username);
      if (this.username === 'me') {
        this.peopleService.getMe()
        .subscribe(data => this.profile = data);
      }else {
      this.peopleService.getPerson(this.username)
        .subscribe(data => this.profile = data);
      }
   });
  }



}
