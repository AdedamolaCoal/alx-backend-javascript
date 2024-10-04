export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('Size has to be a number');
    }

    if (typeof location !== 'string') {
      throw new Error('Location has to be a string');
    }

    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
