import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  constructor() {
    this.isUserLoggedIn = false;
   }

   public setUserLoggedIn() {
     this.isUserLoggedIn = true;
   }

   public getUserLoggedIn() {
     return this.isUserLoggedIn;
   }

}
