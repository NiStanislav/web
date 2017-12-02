import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AirportComponent } from './home/airports/airport/airport.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'airport/:code',
    component: AirportComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'person/:user',
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
