const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('SUM', () => {
  it('should return 4 after adding 1, and 3', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5 after ading 1, and 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 after adding 1.2, and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 after adding 1.5, and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 10 after adding 5.8, and 4,4', () => {
    assert.equal(calculateNumber(5.8, 4.4), 10);
  });
  it('should return 22 after adding -15.3, and 36.7', () => {
    assert.equal(calculateNumber(-15.3, 36.7), 22);
  });
  it('should return -7 after adding -4.4, and -3.3', () => {
    assert.equal(calculateNumber(-4.4, -3.3), -7);
  });
});
