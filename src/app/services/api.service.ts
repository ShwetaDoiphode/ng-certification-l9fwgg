import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  APIkey = '5a4b2d457ecbef9eb2a71e480b947604';
  url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
  constructor(private http: HttpClient) {}

  getWeather(zip: string): Observable<any> {
    return this.http.get(this.url + zip + this.APIkey).pipe(
      catchError((err) => {
        if (err.status === 404) {
          console.log(`City ${zip} not found`);
          return EMPTY;
        }
      })
    );
  }
}
