import { Injectable } from '@angular/core';
import { IRates } from './rates';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NormalizeService {

  constructor() { }

  normalize(exchangeName, data) {
    let finalData;
    switch(exchangeName) {
      case "KOINEX":{
        finalData = this.normalize_koinex_data(data);
        break;
      }
      case "COINDELTA":{
        finalData = this.normalize_coindelta_data(data);
        break;
      }
      case "BITBNS":{
        finalData = this.normalize_bitbns_data(data);
        break;
      }
      default: {
        console.log("No such  Exchange supported");
      }
    }
    return <IRates []>finalData;
  }

  normalize_koinex_data(data) {
    let koinex_supported_crypto = ['AE', 'AION', 'BAT', 'BCH', 'BTC', 'EOS', 'ETH','GAS', 'GNT', 'LTC', 'NCASH', 'NEO', 'OMG', 'REQ', 'TRX', 'XLM', 'XRB', 'XRP', 'ZRX'];

    let jsonStr = JSON.stringify(data);
    let jsonData = JSON.parse(jsonStr)['stats'];
    let finalKoinexData = [];
    let cryptoInfo;
    for (let i=0; i< koinex_supported_crypto.length; i++){
      let koinexCryptoInfo = jsonData.inr[koinex_supported_crypto[i]];
      cryptoInfo = {
                    "symbol" : koinexCryptoInfo.currency_short_form,
                    "name" : koinexCryptoInfo.currency_full_form,
                    "buy": "NA",
                    "sell": koinexCryptoInfo.last_traded_price
                  };
      finalKoinexData.push(cryptoInfo);
    }

    return finalKoinexData;
  }

  normalize_coindelta_data(data) {
    let coindelta_supported_crypto = {
            "BTC": "BitCoin",
            "ETH": "Ethereum",
            "LTC": "LiteCoin",
            "OMG": "OmiseGO",
            "QTUM": "Qtum",
            "XRP": "Ripple",
            "BCH": "Bitcoin Cash",
            "ZIL": "Zilliqa",
            "ZRX": "0x",
            "KNC": "KingN Coin",
            "EOS": "EOS",
            "ZEC": "ZCash",
            "NEO": "NEO",
            "GAS": "Gas",
            "TRX": "TRON",
            "GNT": "Golem",
            "BAT": "Basic Attention Token",
            "CVC": "Civic",
            "ENG": "Enigma",
            "MANA": "Decentraland",
            "SPANK": "SpankChain",
            "ICX": "ICON",
            "CND": "Cindicator",
            "AION": "Aion"
    }
    let jsonStr = JSON.stringify(data);
    let jsonData = JSON.parse(jsonStr);
    let finalCoinDeltaData = [];
    let cryptoInfo;
    for (let i=0; i< jsonData.length; i++){
      for (let curr in coindelta_supported_crypto) {
        let cryptoINR = curr.toLowerCase()+'-inr';
        if (cryptoINR == jsonData[i]['MarketName']) {
        cryptoInfo = {
                        "symbol" : curr,
                        "name" : coindelta_supported_crypto[curr],
                        "buy": jsonData[i]['Bid'],
                        "sell": jsonData[i]['Ask']
                      };
          finalCoinDeltaData.push(cryptoInfo);

        }
      }
    }
    return finalCoinDeltaData;
  }

  normalize_bitbns_data(data) {
    let bitbns_supported_crypto = {
      "BTC": "BitCoin",
      "ETH": "Ethereum",
      "XRP": "Ripple",
      "NEO": "Neo",
      "GAS": "Gas",
      "ACT": "Achain",
      "ADA": "Cardano",
      "BCH": "Bitcoin Cash",
      "BLZ": "Bluzelle",
      "DASH": "Dash",
      "DBC": "Deepbrain Chain",
      "DGB": "DigiByte",
      "DGD": "DigixDAO",
      "DOGE": "DogeCoin",
      "EOS": "EOS",
      "ETN": "Electroneum",
      "ICX": "ICON",
      "LRC": "Loopring",
      "LTC": "LiteCoin",
      "NCASH": "Nucleus Vision",
      "NEXO": "Nexo",
      "OMG": "OmiseGo",
      "ONT": "Ontology",
      "POLY": "Polymath",
      "POWR": "Power Ledger",
      "QLC": "QLINK",
      "REQ": "Request",
      "RPX": "Red Pulse",
      "SC": "SiaCoin",
      "SUB": "Substratum",
      "TRX": "Tron",
      "TST": "TST",
      "VEN": "Vechain",
      "WAN": "Wanchain",
      "WAVES": "Waves",
      "WPR": "WePower",
      "XEM": "NEM",
      "XLM": "Stellar",
      "XMR": "Monero",
      "XVG": "Verge",
      "ZIL": "Zilliqa"
    }
    let jsonStr = JSON.stringify(data);
    let jsonData = JSON.parse(jsonStr);
    let finalBitbnsData = [];
    let cryptoInfo;
    for (let curr in bitbns_supported_crypto) {
      cryptoInfo = {
                      "symbol" : curr,
                      "name" : bitbns_supported_crypto[curr],
                      "buy": jsonData[curr]['highest_buy_bid'],
                      "sell": jsonData[curr]['lowest_sell_bid']
                    };
      finalBitbnsData.push(cryptoInfo);
    }
    return finalBitbnsData;
  }

}
