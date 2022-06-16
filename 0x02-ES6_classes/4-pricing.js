import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter for amount
  set amount(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = val;
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter for currency
  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('currency must be a string');
    }
    this._currency = val;
  }

  // method
  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('amount must be number');
    }

    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('conversionRate must be number');
    }

    return amount * conversionRate;
  }
}
