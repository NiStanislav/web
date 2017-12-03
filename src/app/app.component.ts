import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  isAuth = false;
  constructor(private user: LoginService) {
    this.isAuth = user.getUserLoggedIn();
  }
}
