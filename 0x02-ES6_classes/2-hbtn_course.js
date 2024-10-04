export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be of type string');
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be of type number');
    }
    this._length = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be of type array of strings');
    }

    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be of type array of strings');
      }
    }
    this._students = newStudents;
  }

  get students() {
    return this._students;
  }
}