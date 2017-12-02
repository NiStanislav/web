import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportsService } from '../../../airports.service';
@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {

  constructor(private route: ActivatedRoute, private portService: AirportsService) { }
  public port;
  lat;
  lng;
  label;
  code: String;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.portService.getAirport(this.code)
      .subscribe(data => {
        this.port = data;
        this.lat = this.port.Location.Loc.coordinates[1];
        this.lng = this.port.Location.Loc.coordinates[0];
        this.label = this.port.IataCode;
        console.log(this.lat);
      });
    }
    );
  }

}
