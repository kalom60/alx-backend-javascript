const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Calc', () => {
  it('should return 6 after adding 1.4, and 4.5', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return 22 after adding -15.3, and 36.7', () => {
    assert.equal(calculateNumber('SUM', -15.3, 36.7), 22);
  });
  it('should return -7 after adding -4.4, and -3.3', () => {
    assert.equal(calculateNumber('SUM', -4.4, -3.3), -7);
  });
  it('should return -4 after subtracting 1.4, and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return -2 after subtracting 1, and 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return 0 after subtracting 4, and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 4, 3.7), 0);
  });
  it('should return 0.2 after dividing 1.4., and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return Error after dividing 1.4, and 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('should return 2 after dividing -3.7, and 2.2', () => {
    assert.equal(calculateNumber('DIVIDE', -3.7, 2.2), -2);
  });
  it('should return 1 after dividing 7, and 6.6', () => {
    assert.equal(calculateNumber('DIVIDE', 7, 6.6), 1);
  });
});
