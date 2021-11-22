import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseWeatherURL =
    'https://api.openweathermap.org/data/2.5/weather?zip=';
  private urlSuffix = '&units=metric&APPID=abe1eb51289c21c167c66ce790c2fac3';

  constructor(private http: HttpClient) {}

  getWeather(zip: any): Observable<any> {
    return this.http.get(this.baseWeatherURL + zip + this.urlSuffix).pipe(
      catchError((err) => {
        //if (err.status === 404) {
        //console.log(`Zipcode ${zip} not found`);
        return err;
        //}
      })
    );
  }
}
