export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof (this.evacuationWarningMessage) !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter
  set sqft(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('sqft must be number');
    }
    this._sqft = val;
  }
}
