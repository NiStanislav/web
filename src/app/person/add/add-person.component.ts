import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-person-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  rForm: FormGroup;


  e: string;
  a: FullAddress;
  c: City;

  newAddr: FullAddress = {Address: '', City: this.c};
  newCity: City = {Name: '', CountryRegion: '', Region: ''};
  newUser: User = { UserName: '', FirstName: '', LastName: '',
                  Emails: [''],
                  AddressInfo:
                    [this.newAddr] };

  constructor(private fb: FormBuilder, private peopleService: PeopleService) {

    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'emails': [null, Validators.required],
      'addressInfo': [null, Validators.required],
      'addressCityName': [null, Validators.required],
      'addressCityCountryRegion': [null, Validators.required],
      'addressCityRegion': [null, Validators.required]
    });
  }

  ngOnInit() {}

  addPost(post) {
    this.newUser.UserName = post.username;
    this.newUser.FirstName = post.firstname;
    this.newUser.LastName = post.lastname;
    this.newAddr.Address = post.addressInfo;
    this.newCity.Name = post.addressCityName;
    this.newCity.CountryRegion = post.addressCityCountryRegion;
    this.newCity.Region = post.addressCityRegion;
    this.newAddr.City = this.newCity;
    this.newUser.Emails[0] = post.emails;
    this.peopleService.addPerson(this.newUser);
  }
}

export class City {
  Name: string;
  CountryRegion: string;
  Region: string;
}
export class FullAddress {
  Address: string;
  City: City;
}
export class User {
  UserName: string;
  FirstName: string;
  LastName: string;
  Emails: [string];
  AddressInfo: [FullAddress];
}
