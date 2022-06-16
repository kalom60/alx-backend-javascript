export default class HolbertonCourse {
  // Holberton course class
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(val) {
    if ((val instanceof Array) && (val.every((v) => typeof (v) === 'string'))) {
      this._students = val;
    } else {
      throw new TypeError('Students must be an array of string');
    }
  }
}
