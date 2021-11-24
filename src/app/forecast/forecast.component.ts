import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { CurrentWeather } from '../model/current-weather';
import { Forecast } from '../model/forecast';
import { ApiService } from '../services/api.service';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  @Input()
  locationData: CurrentWeather[] = [];

  doNotShow: boolean = false;
  zipCode: string;
  cityName: string;
  forecastArray: any[] = [];
  item: any = {};
  forecastObject: any = {};

  constructor(
    private route: ActivatedRoute,
    private weatherService: ForecastService,
    private getimg: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.zipCode = this.route.snapshot.paramMap.get('zipCode')!;
    this.forecastData();
  }

  forecastData() {
    this.forecastArray.splice(0, this.forecastArray.length);
    this.weatherService.getFiveDaysForecast(this.zipCode).subscribe((data) => {
      this.item = data;
      this.cityName = this.item.city.name;

      for (let i = 0; i < this.item.list.length; i += 8) {
        this.forecastObject = new Forecast(
          this.item.list[i].dt_txt,
          this.item.list[i].main.temp_max,
          this.item.list[i].main.temp_min,
          this.item.list[i].weather[0].description
        );

        this.forecastArray.push(this.forecastObject);
      }
    });
  }

  displayImage(description: string): string {
    return this.getimg.getImage(description);
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
