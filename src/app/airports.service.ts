import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AirportsService {

  actionUrl= 'http://services.odata.org/TripPinRESTierService/';
  constructor(private http: HttpClient) { }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'Airports');
  }

  public count() {
    return this.http.get(this.actionUrl + 'Airports/$count');
  }

  public getAirport<T>(port: String): Observable<T> {
    return this.http.get<T>(this.actionUrl + 'Airports(\'' + port + '\')');
  }
  public getCurrentLocation<T>(): any {
    return this.http.get<T>('http://ip-api.com/json/');
  }

  public getNearestAirport<T>(lat: String, lon: String): Observable<T> {
    return this.http.get<T>('http://services.odata.org/TripPinRESTierService/GetNearestAirport(lat = ' + lat + ', lon = ' + lon + ')');
  }
}
