import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { ExchangeListService } from './exchange-list.service';
import { RatesService } from './rates.service';
import { NormalizeService } from './normalize.service';
import { RatesComponent } from './rates/rates.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangesComponent,
    RatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ ExchangeListService, RatesService, NormalizeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
