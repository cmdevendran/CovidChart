import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CovidService} from'./covid.service'

import {ChartsModule} from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component'
import { HttpClientModule } from "@angular/common/http";
import { BarchartComponent } from './barchart/barchart.component';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { AllcountrystatComponent } from './allcountrystat/allcountrystat.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    MyBarChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BarchartComponent,
    AllcountrystatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
