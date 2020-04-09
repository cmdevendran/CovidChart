import { Component, OnInit } from '@angular/core';


import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color} from 'ng2-charts';
import { JsonPipe } from '@angular/common';
import {CovidService} from '../covid.service'
import {Chart} from 'chart.js'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
chart = []
array : any;
  constructor(private covid : CovidService) { }

  ngOnInit(): void {

    this.covid.getWorldAggregate().subscribe(res=>{

      //
      this.array = JSON.parse(JSON.stringify(res))
      console.log(this.array)
       let chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.array.map(e => e["Date"]),
          
          datasets: [
            {data : this.array.map(e => e["Deaths"]),
              borderColor: '#3cba9f',
              backgroundColor: 'red',
              
              fill: false
            },
           ]
        },
        options: {
          legend: {
            labels :{
             
            },
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })
      
    })
      

      



    




  


  }

}
