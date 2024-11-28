const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 for inputs -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 7 for inputs 10.7 and 4.2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.7, 4.2), 7);
    });
    
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" for inputs 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle zero division correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
