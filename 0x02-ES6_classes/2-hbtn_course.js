export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLen(length);
    this._students = this.validateStds(students);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this._name = this.validateName(name);
  }

  set length(len) {
    this._length = this.validateLen(len);
  }

  set students(stds) {
    this._students = this.validateStds(stds);
  }

  static validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  static validateLen(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return len;
  }

  static validateStds(stds) {
    if (
      !Array.isArray(stds)
      || !stds.every((student) => typeof student === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    return stds;
  }
}
