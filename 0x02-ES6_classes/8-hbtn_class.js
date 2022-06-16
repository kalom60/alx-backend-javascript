export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](attr) {
    if (attr === 'number') {
      return this._size;
    }
    if (attr === 'string') {
      return this._location;
    }
    return this;
  }
}
