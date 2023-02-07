import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
})
export class ForCountryComponent  {

  termino: string = ""
  hasError: boolean= false
  countries: Country[] = []
  constructor(private countryService: CountryService) { }

  buscar(){
    this.hasError= false
    console.log(this.termino)
    this.countryService.buscarPais(this.termino)
      .subscribe( (countries)=>{
        console.log(countries)
        this.countries= countries
      },(err) =>{
       this.hasError = true
        this.countries = []
      } )
  }

}
