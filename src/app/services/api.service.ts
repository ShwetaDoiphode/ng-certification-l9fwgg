import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  APIkey = '5a4b2d457ecbef9eb2a71e480b947604';
  url = 'https://openweathermap.org/api';
  constructor(private http: HttpClient) {}

  getzipcode(zip) {
    return this.http.get(this.url+ this.APIkey);
  }
}
