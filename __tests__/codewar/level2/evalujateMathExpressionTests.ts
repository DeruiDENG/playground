import { expect } from 'chai';
import { calc, calculateUnary } from '../../../src/codewar/level2/evaluateMathExpression';

const tests = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
];

describe("calc", function() {
  it("should evaluate correctly", () => {
    tests.forEach(function(m) {
      var x = calc(m[0]);
      var y = m[1];
      expect(x).to.equal(y, 'Expected: "' + m[0] + '" to be ' + y + ' but got ' + x);
    });
  });

  it('should calculateUnary work', function () {
    expect(calculateUnary('-5')).to.equal(-5);
    expect(calculateUnary('+5')).to.equal(5);
    expect(calculateUnary('5')).to.equal(5);
    expect(calculateUnary('---5')).to.equal(-5);
    expect(calculateUnary('-+-5')).to.equal(5);
    expect(calculateUnary('-++5')).to.equal(-5);
  });
});
