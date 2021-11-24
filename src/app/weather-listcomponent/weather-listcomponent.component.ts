import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentWeather } from '../model/current-weather';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather-listcomponent',
  templateUrl: './weather-listcomponent.component.html',
  styleUrls: ['./weather-listcomponent.component.css'],
})
export class WeatherListcomponentComponent implements OnInit {
  @Input()
  locationData: CurrentWeather[] = [];

  constructor(private router: Router, private weatherService: ApiService) {}

  @Input()
  zipCodeArray: any[] = [];

  ngOnInit(): void {
    this.zipCodeArray = JSON.parse(localStorage.getItem('zipCodes')!);
    this.locationData = JSON.parse(localStorage.getItem('Location Data')!);
  }

  displayImage(description: string): string {
    return this.weatherService.getImage(description);
  }

  onSelect(zipCode: string) {
    this.router.navigate(['/forecast', zipCode]);
  }

  onDelete(item: CurrentWeather, id: any) {
    this.locationData.splice(this.locationData.indexOf(item), 1);
    this.zipCodeArray.splice(this.zipCodeArray.indexOf(id), 1);
    localStorage.setItem('zipCodes', JSON.stringify(this.zipCodeArray));
    localStorage.setItem('Location Data', JSON.stringify(this.locationData));
  }
}
