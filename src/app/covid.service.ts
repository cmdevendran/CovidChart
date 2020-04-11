import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http : HttpClient) {
   
  }

   getWorldAggregate(){
    const url ='https://datahub.io/core/covid-19/r/worldwide-aggregated.json'
   

    return this.http.get(url).pipe(map(data =>data))

  }

  getKeyCountries(){
    const url = "https://datahub.io/core/covid-19/r/key-countries-pivoted.json"
    return this.http.get(url).pipe(map(data =>data))


  }
  getAllCountries(){
    const url = "https://datahub.io/core/covid-19/r/countries-aggregated.json"
    return this.http.get(url).pipe(map(data =>data))



  }



 


 

}

