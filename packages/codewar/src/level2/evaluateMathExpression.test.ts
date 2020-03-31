import { expect } from 'chai';
import { calc, calculateUnary } from './evaluateMathExpression';

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
  [
    '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ',
    1,
  ],
];

describe('calc', function() {
  it('should evaluate correctly', () => {
    tests.forEach(function(m) {
      const x = calc(m[0]);
      const y = m[1];
      expect(x).to.equal(
        y,
        'Expected: "' + m[0] + '" to be ' + y + ' but got ' + x
      );
    });
  });

  it('should pass complex test', function() {
    expect(
      calc(
        '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) '
      )
    ).to.equal(1);
  });

  it('should calculateUnary work', function() {
    expect(calculateUnary('-5')).to.equal(-5);
    expect(calculateUnary('+5')).to.equal(5);
    expect(calculateUnary('5')).to.equal(5);
    expect(calculateUnary('---5')).to.equal(-5);
    expect(calculateUnary('-+-5')).to.equal(5);
    expect(calculateUnary('-++5')).to.equal(-5);
  });
});
