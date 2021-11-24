import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherListcomponentComponent } from './weather-listcomponent/weather-listcomponent.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
