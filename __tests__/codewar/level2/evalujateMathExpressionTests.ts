import { expect } from 'chai';
import { calc } from '../../../src/codewar/level2/evaluateMathExpression';

const tests: Array<[string, number]> = [
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

describe('calc', function () {
  it('should evaluate correctly', () => {
    tests.forEach(function (m) {
      const x = calc(m[0]);
      const y = m[1];
      expect(x).to.equal(y, 'Expected: "' + m[0] + '" to be ' + y + ' but got ' + x);
    });
  });
});
