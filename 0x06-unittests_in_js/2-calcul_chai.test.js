const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 for inputs 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 0 for inputs -1.4 and 1.4', function () {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 for inputs 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 6 for inputs 10.7 and 4.2', function () {
      expect(calculateNumber('SUBTRACT', 10.7, 4.2)).to.equal(6);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 for inputs 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return "Error" for inputs 1.4 and 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});
