export default class Currenct {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // setter for code
  set code(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = val;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
