import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter
  get floors() {
    return this._floors;
  }

  // setter
  set floors(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('floor must be number');
    }
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
