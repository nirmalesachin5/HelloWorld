import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
loginForm: FormGroup;
  constructor(private formbuilder:FormBuilder, private countryService: CountryService) { 
// this.loginForm=this.formbuilder.group({
//   username:"Admin",
//   password:"Admin123"
//});
  }

  ngOnInit() {
    this.loginForm= this.formbuilder.group({
username:["",Validators.required],
password:['',Validators.required],
country:['',Validators.required]    
    });
  }

onSubmit(){
debugger;
}


//prime auto complete function
country: any;

countries: any[];

filteredCountriesSingle: any[];

filteredCountriesMultiple: any[];

brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

filteredBrands: any[];

brand: string;



filterCountrySingle(event) {
  debugger;
    let query = event.query;
    this.countryService.getCountries().then(countries => {
        this.filteredCountriesSingle = this.filterCountry(query, countries);
    });
}

filterCountryMultiple(event) {
    let query = event.query;
    this.countryService.getCountries().then(countries => {
        this.filteredCountriesMultiple = this.filterCountry(query, countries);
    });
}

filterCountry(query, countries: any[]):any[] {
  debugger;
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    return filtered;
}

filterBrands(event) {
    this.filteredBrands = [];
    for(let i = 0; i < this.brands.length; i++) {
        let brand = this.brands[i];
        if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredBrands.push(brand);
        }
    }
}

}
