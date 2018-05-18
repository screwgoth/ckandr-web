import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { IRates } from './rates';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RatesService {

  public rawData;
  private _tempUrl: string = "/assets/rates.json";

  constructor(private http:HttpClient) { }

  getRates(exchangeName) {
    switch(exchangeName) {
      case "KOINEX":{
        //this.rawData = this.http.get(this._tempUrl);
        //this.rawData = this.http.get(this._tempUrl);
        this.rawData = this.http.get('https://koinex.in/api/ticker');

        break;
      }
      case "COINDELTA":{
        this.rawData = this.http.get('https://coindelta.com/api/v1/public/getticker/');
        break;
      }
      case "BITBNS":{
        this.rawData = this.http.get('https://bitbns.com/order/getTickerWithVolume/');
        break;
      }
      default:{
        console.log('No such exchange');
        break;
      }
    }
    return this.rawData;

  }

}
