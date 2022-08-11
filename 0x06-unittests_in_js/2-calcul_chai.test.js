const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('Calc', () => {
  it('should return 6 after adding 1.4, and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('should return 22 after adding -15.3, and 36.7', () => {
    expect(calculateNumber('SUM', -15.3, 36.7)).to.equal(22);
  });
  it('should return -7 after adding -4.4, and -3.3', () => {
    expect(calculateNumber('SUM', -4.4, -3.3)).to.equal(-7);
  });
  it('should return -4 after subtracting 1.4, and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should return -2 after subtracting 1, and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should return 0 after subtracting 4, and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 4, 3.7)).to.equal(0);
  });
  it('should return 0.2 after dividing 1.4., and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return Error after dividing 1.4, and 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it('should return 2 after dividing -3.7, and 2.2', () => {
    expect(calculateNumber('DIVIDE', -3.7, 2.2)).to.equal(-2);
  });
  it('should return 1 after dividing 7, and 6.6', () => {
    expect(calculateNumber('DIVIDE', 7, 6.6)).to.equal(1);
  });
});
