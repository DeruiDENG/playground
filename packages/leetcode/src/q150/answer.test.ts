import { evalRPN } from './answer';

describe('q150', function() {
  it('should work for simple test case', function() {
    const input = ['2', '1', '+', '3', '*'];
    expect(evalRPN(input)).toBe(9);
  });

  it('should work for simple test case 2', function() {
    const input = ['4', '13', '5', '/', '+'];
    expect(evalRPN(input)).toBe(6);
  });
});
