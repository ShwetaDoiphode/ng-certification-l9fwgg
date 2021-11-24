import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private baseWeatherURL =
    'https://api.openweathermap.org/data/2.5/forecast?zip=';
  private urlSuffix = '&units=metric&APPID=5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private http: HttpClient) {}

  getFiveDaysForecast(zip: any): Observable<any> {
    return this.http.get(this.baseWeatherURL + zip + this.urlSuffix).pipe(
      catchError((err) => {
        return err;
      })
    );
  }
}
