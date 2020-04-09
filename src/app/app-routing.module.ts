import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarchartComponent } from './barchart/barchart.component';


const routes: Routes = [
  {path:'bar-chart',   component : BarchartComponent},
  {path : 'my-bar-chart', component : MyBarChartComponent},
  {path:'radar-chart', component:RadarChartComponent},
  {path:'pie-chart', component:PieChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
