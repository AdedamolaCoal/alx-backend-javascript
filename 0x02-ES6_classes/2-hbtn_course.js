export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be of type string');
    } else if (typeof length !== 'number') {
      throw new TypeError('length must be of type number');
    } else if (typeof students !== 'object') {
      throw new TypeError('students must be of type array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be of type string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be of type number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) === false) {
      throw new TypeError('Students must be of type array of strings');
    }

    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be of type array of strings');
      }
    }
    this._students = newStudents;
  }
}
