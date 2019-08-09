"use strict";

class VatCalculator {
  constructor() {
    this._taxRate = 0.2;
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

  taxAmount() {
    return ((this._entry1 + this._entry2) * this._taxRate).toFixed(2);
  }

  grossTotal() {
    var gT = this._entry1 + this._entry2 + parseFloat(this.taxAmount());
    return gT.toFixed(2);
  }
}
