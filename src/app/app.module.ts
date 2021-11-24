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

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: 'forecast/:zipcode', component: ForecastComponent },
  {
    path: '',
    component: ZipcodeComponent,
    children: [{ path: '', component: WeatherListcomponentComponent }],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
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
