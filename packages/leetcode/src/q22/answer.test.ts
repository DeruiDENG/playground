import { generateParenthesis } from './answer';

describe('q22', function() {
  it('should work for n = 3', function() {
    const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];

    const result = generateParenthesis(3);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});
