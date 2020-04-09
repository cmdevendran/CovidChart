import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color} from 'ng2-charts';
import { JsonPipe } from '@angular/common';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

import {CovidService} from '../covid.service'


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  data : any;
  Date : any;
  death : any;
  //serData : any;
  public lineChartPlugins = [pluginAnnotations];
  
  //serData = '[{"Confirmed": 555, "Date": "2020-01-22", "Deaths": 17, "Increase rate": null, "Recovered": 28},{"Confirmed": 654, "Date": "2020-01-23", "Deaths": 18, "Increase rate": 17.83783783783784, "Recovered": 30},{"Confirmed": 941, "Date": "2020-01-24", "Deaths": 26, "Increase rate": 43.883792048929664, "Recovered": 36},{"Confirmed": 1434, "Date": "2020-01-25", "Deaths": 42, "Increase rate": 52.39107332624867, "Recovered": 39},{"Confirmed": 2118, "Date": "2020-01-26", "Deaths": 56, "Increase rate": 47.69874476987448, "Recovered": 52},{"Confirmed": 2927, "Date": "2020-01-27", "Deaths": 82, "Increase rate": 38.196411709159584, "Recovered": 61},{"Confirmed": 5578, "Date": "2020-01-28", "Deaths": 131, "Increase rate": 90.57055005124701, "Recovered": 107},{"Confirmed": 6166, "Date": "2020-01-29", "Deaths": 133, "Increase rate": 10.541412692721405, "Recovered": 126},{"Confirmed": 8234, "Date": "2020-01-30", "Deaths": 171, "Increase rate": 33.53876094712942, "Recovered": 143},{"Confirmed": 9927, "Date": "2020-01-31", "Deaths": 213, "Increase rate": 20.5610881709983, "Recovered": 222},{"Confirmed": 12038, "Date": "2020-02-01", "Deaths": 259, "Increase rate": 21.2652362244384, "Recovered": 284},{"Confirmed": 16787, "Date": "2020-02-02", "Deaths": 362, "Increase rate": 39.45007476324971, "Recovered": 472},{"Confirmed": 19881, "Date": "2020-02-03", "Deaths": 426, "Increase rate": 18.430928694823375, "Recovered": 623},{"Confirmed": 23892, "Date": "2020-02-04", "Deaths": 492, "Increase rate": 20.175041496906594, "Recovered": 852},{"Confirmed": 27635, "Date": "2020-02-05", "Deaths": 564, "Increase rate": 15.66633182655282, "Recovered": 1124},{"Confirmed": 30794, "Date": "2020-02-06", "Deaths": 634, "Increase rate": 11.431156142572824, "Recovered": 1487},{"Confirmed": 34391, "Date": "2020-02-07", "Deaths": 719, "Increase rate": 11.680846918230824, "Recovered": 2011},{"Confirmed": 37120, "Date": "2020-02-08", "Deaths": 806, "Increase rate": 7.935215608734844, "Recovered": 2616},{"Confirmed": 40150, "Date": "2020-02-09", "Deaths": 906, "Increase rate": 8.162715517241379, "Recovered": 3244},{"Confirmed": 42762, "Date": "2020-02-10", "Deaths": 1013, "Increase rate": 6.505603985056039, "Recovered": 3946},{"Confirmed": 44802, "Date": "2020-02-11", "Deaths": 1113, "Increase rate": 4.770590711379262, "Recovered": 4683},{"Confirmed": 45221, "Date": "2020-02-12", "Deaths": 1118, "Increase rate": 0.9352261059774116, "Recovered": 5150},{"Confirmed": 60368, "Date": "2020-02-13", "Deaths": 1371, "Increase rate": 33.49549987837509, "Recovered": 6295},{"Confirmed": 66885, "Date": "2020-02-14", "Deaths": 1523, "Increase rate": 10.795454545454545, "Recovered": 8058},{"Confirmed": 69030, "Date": "2020-02-15", "Deaths": 1666, "Increase rate": 3.206997084548105, "Recovered": 9395},{"Confirmed": 71224, "Date": "2020-02-16", "Deaths": 1770, "Increase rate": 3.1783282630740253, "Recovered": 10865},{"Confirmed": 73258, "Date": "2020-02-17", "Deaths": 1868, "Increase rate": 2.855778950915422, "Recovered": 12583},{"Confirmed": 75136, "Date": "2020-02-18", "Deaths": 2007, "Increase rate": 2.5635425482541154, "Recovered": 14352},{"Confirmed": 75639, "Date": "2020-02-19", "Deaths": 2122, "Increase rate": 0.6694527257240205, "Recovered": 16121},{"Confirmed": 76197, "Date": "2020-02-20", "Deaths": 2247, "Increase rate": 0.737714671003054, "Recovered": 18177},{"Confirmed": 76819, "Date": "2020-02-21", "Deaths": 2251, "Increase rate": 0.8163051038754806, "Recovered": 18890},{"Confirmed": 78572, "Date": "2020-02-22", "Deaths": 2458, "Increase rate": 2.281987529126909, "Recovered": 22886},{"Confirmed": 78958, "Date": "2020-02-23", "Deaths": 2469, "Increase rate": 0.49126915440614977, "Recovered": 23394},{"Confirmed": 79561, "Date": "2020-02-24", "Deaths": 2629, "Increase rate": 0.7636971554497327, "Recovered": 25227},{"Confirmed": 80406, "Date": "2020-02-25", "Deaths": 2708, "Increase rate": 1.062078153869358, "Recovered": 27905},{"Confirmed": 81388, "Date": "2020-02-26", "Deaths": 2770, "Increase rate": 1.221301892893565, "Recovered": 30384},{"Confirmed": 82746, "Date": "2020-02-27", "Deaths": 2814, "Increase rate": 1.6685506462869217, "Recovered": 33277},{"Confirmed": 84112, "Date": "2020-02-28", "Deaths": 2872, "Increase rate": 1.6508350856839, "Recovered": 36711},{"Confirmed": 86011, "Date": "2020-02-29", "Deaths": 2941, "Increase rate": 2.2577040136960247, "Recovered": 39782},{"Confirmed": 88369, "Date": "2020-03-01", "Deaths": 2996, "Increase rate": 2.741509806885166, "Recovered": 42716},{"Confirmed": 90306, "Date": "2020-03-02", "Deaths": 3085, "Increase rate": 2.1919451391325016, "Recovered": 45602},{"Confirmed": 92840, "Date": "2020-03-03", "Deaths": 3160, "Increase rate": 2.806015104201271, "Recovered": 48228},{"Confirmed": 95120, "Date": "2020-03-04", "Deaths": 3254, "Increase rate": 2.455838000861698, "Recovered": 51170},{"Confirmed": 97886, "Date": "2020-03-05", "Deaths": 3348, "Increase rate": 2.907905803195963, "Recovered": 53796},{"Confirmed": 101801, "Date": "2020-03-06", "Deaths": 3460, "Increase rate": 3.9995504975175207, "Recovered": 55865},{"Confirmed": 105847, "Date": "2020-03-07", "Deaths": 3558, "Increase rate": 3.974420683490339, "Recovered": 58358},{"Confirmed": 109821, "Date": "2020-03-08", "Deaths": 3802, "Increase rate": 3.754475799975436, "Recovered": 60694},{"Confirmed": 113590, "Date": "2020-03-09", "Deaths": 3988, "Increase rate": 3.4319483523187735, "Recovered": 62494},{"Confirmed": 118620, "Date": "2020-03-10", "Deaths": 4262, "Increase rate": 4.428206708337001, "Recovered": 64404},{"Confirmed": 125875, "Date": "2020-03-11", "Deaths": 4615, "Increase rate": 6.116169280053954, "Recovered": 67003},{"Confirmed": 128352, "Date": "2020-03-12", "Deaths": 4720, "Increase rate": 1.9678252234359483, "Recovered": 68324},{"Confirmed": 145205, "Date": "2020-03-13", "Deaths": 5404, "Increase rate": 13.1302979306906, "Recovered": 70251},{"Confirmed": 156101, "Date": "2020-03-14", "Deaths": 5819, "Increase rate": 7.5038738335456765, "Recovered": 72624},{"Confirmed": 167454, "Date": "2020-03-15", "Deaths": 6440, "Increase rate": 7.272855394904582, "Recovered": 76034},{"Confirmed": 181574, "Date": "2020-03-16", "Deaths": 7126, "Increase rate": 8.432166445710463, "Recovered": 78088},{"Confirmed": 197102, "Date": "2020-03-17", "Deaths": 7905, "Increase rate": 8.551885181799156, "Recovered": 80840},{"Confirmed": 214821, "Date": "2020-03-18", "Deaths": 8733, "Increase rate": 8.989761646254223, "Recovered": 83312},{"Confirmed": 242500, "Date": "2020-03-19", "Deaths": 9867, "Increase rate": 12.884680734192653, "Recovered": 84975},{"Confirmed": 272035, "Date": "2020-03-20", "Deaths": 11299, "Increase rate": 12.179381443298968, "Recovered": 87420},{"Confirmed": 304396, "Date": "2020-03-21", "Deaths": 12973, "Increase rate": 11.895895748708805, "Recovered": 91692},{"Confirmed": 336953, "Date": "2020-03-22", "Deaths": 14651, "Increase rate": 10.695607038200238, "Recovered": 97899},{"Confirmed": 378235, "Date": "2020-03-23", "Deaths": 16505, "Increase rate": 12.251560306630301, "Recovered": 98351},{"Confirmed": 418045, "Date": "2020-03-24", "Deaths": 18625, "Increase rate": 10.52520258569408, "Recovered": 108000},{"Confirmed": 467653, "Date": "2020-03-25", "Deaths": 21181, "Increase rate": 11.866665071942016, "Recovered": 113787},{"Confirmed": 529591, "Date": "2020-03-26", "Deaths": 23970, "Increase rate": 13.244435510945083, "Recovered": 122150},{"Confirmed": 593291, "Date": "2020-03-27", "Deaths": 27198, "Increase rate": 12.028150025208133, "Recovered": 130915},{"Confirmed": 660706, "Date": "2020-03-28", "Deaths": 30652, "Increase rate": 11.36288937469134, "Recovered": 139415},{"Confirmed": 720117, "Date": "2020-03-29", "Deaths": 33925, "Increase rate": 8.99204790027637, "Recovered": 149082},{"Confirmed": 782365, "Date": "2020-03-30", "Deaths": 37582, "Increase rate": 8.644150881037387, "Recovered": 164566},{"Confirmed": 857487, "Date": "2020-03-31", "Deaths": 42107, "Increase rate": 9.601912150978125, "Recovered": 178034},{"Confirmed": 932605, "Date": "2020-04-01", "Deaths": 46809, "Increase rate": 8.760249426521918, "Recovered": 193177},{"Confirmed": 1013157, "Date": "2020-04-02", "Deaths": 52983, "Increase rate": 8.63731161638636, "Recovered": 210263},{"Confirmed": 1095917, "Date": "2020-04-03", "Deaths": 58787, "Increase rate": 8.168526694283313, "Recovered": 225796}]';
  //array = JSON.parse(this.serData);
  array2 : any;
  show : boolean = false
  
  barChartOptions : ChartOptions;
  barChartLabels : Label[]
  barChartType: ChartType
  barChartLegend : any
  barChartColors: Color[] 
  barChartData: ChartDataSets[]
  barChartColors1: Color[] 
  barChartData1: ChartDataSets[]
  barChartColors2: Color[] 
  barChartData2: ChartDataSets[]


  constructor(private covid : CovidService) { }

  ngOnInit(): void {

    this.covid.getKeyCountries().subscribe(res=>{

      console.log(res)
      let array = JSON.parse(JSON.stringify(res))

      console.log(Object.keys(array));
      

      
      this.barChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
          }
        }
      };

      this.barChartLabels =array.map(e => e["Date"])
      this.barChartType = 'line';
      this.barChartLegend = true;

      this.barChartColors = [
        { backgroundColor: 'red' },
        { backgroundColor: 'green' },
        { backgroundColor: 'purple' },
        { backgroundColor: 'yellow' },
        { backgroundColor: 'black' },
        { backgroundColor: 'magento' },
        { backgroundColor: 'white' },
        {backgroundColor: 'brown' }
      ] 

      this.barChartData = [

        { data: array.map(e => e["China"]), label: 'China'},
        {data: array.map(e => e["Iran"]), label: 'Iran'} ,
        {data: array.map(e => e["France"]), label: 'France'},
        {data: array.map(e => e["Germany"]), label: 'Germany'},
        {data: array.map(e => e["Italy"]), label: 'Italy'},
        {data: array.map(e => e["US"]), label: 'US'},
        {data: array.map(e => e["Spain"]), label: 'Spain'},
        {data: array.map(e => e["United_Kingdom"]), label: 'UK'}





    
      ];



 

      

      })

     

      

 

    

    





}

}
