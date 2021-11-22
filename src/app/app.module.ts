import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ForecastFiveComponent } from './forecast-five/forecast-five.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';

const routes: Routes = [
  {
    path: '',
    component: ZipcodeComponent,
  },
  {
    path: 'forecast',
    component: ForecastFiveComponent,
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
    ForecastFiveComponent,
    ZipcodeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
