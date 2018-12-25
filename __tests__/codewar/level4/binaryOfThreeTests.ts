import { multipleOf3Regex } from '../../../src/codewar/level4/binaryOfThree';

describe('binaryOfThree', function () {
  it('should pass simple test', function () {
    expect(multipleOf3Regex.test(' 0')).toBe(false);
    expect(multipleOf3Regex.test('abc')).toBe(false);
    expect(multipleOf3Regex.test('000')).toBe(true);
    expect(multipleOf3Regex.test('110')).toBe(true);
    expect(multipleOf3Regex.test('111')).toBe(false);
    expect(multipleOf3Regex.test((12345678).toString(2))).toBe(true);
  });

  it('should pass random test', function () {
    for (let i = 0; i < 100000000; i++) {
      const isCorrect = (multipleOf3Regex.test(i.toString(2))) === (i % 3 === 0) ?
        true :
        i.toString(2);
      expect(isCorrect).toBe(true);
    }
  });
});
