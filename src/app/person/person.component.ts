import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

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
      this.peopleService.getPerson(this.username)
        .subscribe(data => this.profile = data);
   });
  }



}
