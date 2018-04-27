import { Component, OnInit } from '@angular/core';
import { ExchangeListService } from '../exchange-list.service';
// import { Rates } from '../rates';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {

  public exchanges = [];
  public exchangeName = "KOINEX";
  //public rates: Rates[] = [];

  constructor(private _exchangeListService: ExchangeListService) { }

  ngOnInit() {
    this.exchanges = this._exchangeListService.getExchageList();
  }

  exchangeClick(event) {
    //console.log(event.srcElement.innerText);
    this.exchangeName = event.srcElement.innerText;
}
}
