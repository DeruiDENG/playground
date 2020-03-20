import { isValid } from './answer';

describe('q20', () => {
  it('should work for `()`', () => {
    const testCase = '()';
    const expected = true;
    const result = isValid(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `()[]{}`', () => {
    const testCase = '()[]{}';
    const expected = true;
    const result = isValid(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `(]`', () => {
    const testCase = '(]';
    const expected = false;
    const result = isValid(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `([)]`', () => {
    const testCase = '([)]';
    const expected = false;
    const result = isValid(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `{[]}`', () => {
    const testCase = '{[]}';
    const expected = true;
    const result = isValid(testCase);
    expect(result).toBe(expected);
  });
});
