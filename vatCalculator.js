"use strict";

class VatCalculator {
  constructor() {
    this._taxRates = {
      Uk: 0.2,
      France: 0.2,
      Switzerland: 0.08,
      Germany: 0.19,
      Greece: 0.24,
      Ireland: 0.23,
      Italy: 0.22,
      Norway: 0.25,
      Turkey: 0.18
    };
    this._entry1 = 0.0;
    this._entry2 = 0.0;
  }

  enterCosts(price1, price2) {
    this._entry1 = price1;
    this._entry2 = price2;
  }

  netTotal() {
    return (this._entry1 + this._entry2).toFixed(2);
  }

  taxAmount(country) {
    return ((this._entry1 + this._entry2) * this._taxRates[country]).toFixed(2);
  }

  grossTotal(country) {
    var gT = this._entry1 + this._entry2 + parseFloat(this.taxAmount(country));
    return gT.toFixed(2);
  }

  getTaxRate(country) {
    return this._taxRates[country];
  }
}

const vat = new VatCalculator();
console.log(vat._taxRates["Uk"]);
