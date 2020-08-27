import { reverseWords } from './answer';

describe('q151', function() {
  it('should work for simple case', function() {
    const input = 'the sky is blue';
    const output = 'blue is sky the';
    expect(reverseWords(input)).toEqual(output);
  });
});
