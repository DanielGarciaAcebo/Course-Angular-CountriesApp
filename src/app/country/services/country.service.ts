import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl : string= "https://restcountries.com/v3.1/"
  constructor(private http:HttpClient) { }

  buscarPais(termino: string){
    const url = `${ this.apiUrl}/name/${ termino }`

    return  this.http.get<Country[]>( url )
  }


}
