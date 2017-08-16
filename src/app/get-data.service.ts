import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Component, OnInit} from '@angular/core';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }


}
