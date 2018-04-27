import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { RatesService } from '../rates.service';
import { NormalizeService } from '../normalize.service';
import { IRates } from '../rates';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})

export class RatesComponent implements OnChanges {

  @Input() public exchangeName;
  public rawData;
  public rates: IRates[] = [];

  constructor(private _ratesService: RatesService, private _normalizeService: NormalizeService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.getRates();
  }

  getRates() {
    //let rawData;
    this._ratesService.getRates(this.exchangeName).subscribe(
      data => {
        //console.log(data);
        this.rawData = data;
        //this.rates = data as IRates[];
        this.rates = this._normalizeService.normalize(this.exchangeName, this.rawData);
      },
      err => console.error(err)
    );
  }

}
