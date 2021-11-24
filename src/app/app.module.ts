import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { HeaderComponent } from './header/header.component';
import { WeatherListcomponentComponent } from './weather-listcomponent/weather-listcomponent.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ForecastComponent,
    ZipcodeComponent,
    HeaderComponent,
    WeatherListcomponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
