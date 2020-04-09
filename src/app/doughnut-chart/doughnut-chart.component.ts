import { Component, OnInit } from '@angular/core';
import {Dataset} from 'data.js'


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private dataset1 : Dataset) { }

  ngOnInit(): void {
  }

  
}
