import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  @Input() zipcode: any;
  ZipCode: any;

  constructor(
    private route: ActivatedRoute,
    private apiforecast: ForecastService
  ) {}

  ngOnInit() {
    console.log(this.zipcode);
    const routeParams = this.route.snapshot.paramMap;
    const zipCodeFromRoute = Number(routeParams.get('zipcode'));
    console.log('Zip Code passed', zipCodeFromRoute);

    this.ZipCode = zipCodeFromRoute;
    this.getForecat(this.ZipCode);
  }

  getForecat(zipcode) {
    this.apiforecast
      .getFiveDaysForecast(zipcode)
      .subscribe((data) => console.log(data));
  }
}
