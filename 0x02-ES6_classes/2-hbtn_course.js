export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = val;
    }
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = val;
    }
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(val) {
    if (!(val instanceof Array)) {
      throw new Error('Students must be an array of strings');
    }
    if (val.every((v) => typeof (v) !== 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = val;
  }
}
