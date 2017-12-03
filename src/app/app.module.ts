import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AirportsService } from './airports.service';
import { HttpClientModule } from '@angular/common/http';
import { AirportsComponent } from './home/airports/airports.component';
import { AirportComponent } from './home/airports/airport/airport.component';
import { AgmCoreModule } from '@agm/core';
import { PeopleComponent } from './people/people.component';
import { CoreModule } from './core.module';
import { PeopleService } from './people.service';
import { PersonComponent } from './person/person.component';
import { MatIconModule } from '@angular/material';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { MeComponent } from './me/me.component';
import { LoginComponent } from './login/login.component';
import { AddPersonComponent } from './person/add/add-person.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AirportsComponent,
    AirportComponent,
    PeopleComponent,
    PersonComponent,
    MeComponent,
    LoginComponent,
    AddPersonComponent
  ],
  imports: [
    MatIconModule,
    CoreModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZRNZinTN1VE_aoFcq-od2_MAcw3vkVW4'
    })
  ],
  providers: [AirportsService, PeopleService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
