const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('sum', () => {
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
});
