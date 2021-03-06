import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentWeather } from '../model/current-weather';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiKey: string = '5a4b2d457ecbef9eb2a71e480b947604';
  currentWeatherUrl: string =
    'https://api.openweathermap.org/data/2.5/weather?zip=';

  locationData: CurrentWeather[] = [];
  zipCodeArray: any[] = [];
  newItem: any = {};
  errorMsg: string;

  constructor(private http: HttpClient) {}

  getCurrentWeather(zipCode: string): Observable<any> {
    return this.http
      .get(
        this.currentWeatherUrl +
          zipCode +
          '&appid=' +
          this.apiKey +
          '&units=metric'
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let zipCodeArray = JSON.parse(localStorage.getItem('zipCodes')!);
    zipCodeArray.pop();
    localStorage.setItem('zipCodes', JSON.stringify(zipCodeArray));
    return throwError(error);
  }

  isExisting(value: any, zipCodeArray: any[]): boolean {
    if (zipCodeArray.indexOf(value) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  getImage(description: string): string {
    if (description.includes('clear sky')) {
      return 'https://angulartraining.com/images/weather/sun.png';
    } else if (description.includes('rain')) {
      return 'https://angulartraining.com/images/weather/rain.png';
    } else if (description.includes('clouds')) {
      return 'https://angulartraining.com/images/weather/clouds.png';
    } else if (description.includes('snow')) {
      return 'https://angulartraining.com/images/weather/snow.png';
    } else if (description.includes('mist')) {
      return 'https://angulartraining.com/images/weather/clouds.png';
    } else if (description.includes('drizzle')) {
      return 'https://angulartraining.com/images/weather/rain.png';
    }
  }
}
