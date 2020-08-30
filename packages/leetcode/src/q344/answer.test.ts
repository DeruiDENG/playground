import { reverseString } from './answer';

describe('q344', function() {
  it('should work for simple case', function() {
    const input = ['h', 'e', 'l', 'l', 'o'];
    const output = ['o', 'l', 'l', 'e', 'h'];
    reverseString(input);
    expect(input).toEqual(output);
  });
});
