import { multipleOf3Regex } from './binaryOfThree';

describe('binaryOfThree', function() {
  it('should pass simple test', function() {
    expect(multipleOf3Regex.test(' 0')).toBe(false);
    expect(multipleOf3Regex.test('abc')).toBe(false);
    expect(multipleOf3Regex.test('000')).toBe(true);
    expect(multipleOf3Regex.test('110')).toBe(true);
    expect(multipleOf3Regex.test('111')).toBe(false);
    expect(multipleOf3Regex.test((12345678).toString(2))).toBe(true);
  });
});
