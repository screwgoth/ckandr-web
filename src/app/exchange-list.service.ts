import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ExchangeListService {

  constructor(private http:HttpClient) { }

  getExchageList() {
    return [
    {
      "ex1" : "Koinex",
      "ex2" : "CoinDelta"
    },
    ];
  }

  getRates() {
    console.log("In Service, Get Crypto Rates");
    return this.http.get('https://koinex.in/api/ticker');

  }

}
