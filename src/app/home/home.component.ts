import { Component, OnInit } from '@angular/core';
import {  AirportsService } from '../airports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  airportsCount;
  airports: any[];
  constructor(private airportsService: AirportsService) {
    this.airportsService.count().subscribe(count => this.airportsCount = count);
  }


  ngOnInit() {
  }

}
