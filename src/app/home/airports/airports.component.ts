import { Input, Component, OnInit } from '@angular/core';
import { AirportsService } from '../../airports.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  airports: any[];
  lat;
  lon;
  tmp;
  constructor(private airportsService: AirportsService, private router: Router) { }

  ngOnInit() {
    this.airportsService.getAll()
    .subscribe(airports => {
        this.airports = airports['value'] as any[];
    });
  }

  nearest() {
      this.airportsService.getCurrentLocation().subscribe(data => {
        this.lat = data.lat;
        this.lon = data.lon;
        this.airportsService.getNearestAirport(this.lat, this.lon)
        .subscribe(airport => {
           this.router.navigate(['airport/' + airport['IcaoCode']]);
        });
      });
    }


}
