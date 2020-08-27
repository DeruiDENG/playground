import { strStr } from './answer';

describe('q28', function() {
  it('should work for simple case', function() {
    const haystack = 'hello',
      needle = 'll';
    const output = 2;
    expect(strStr(haystack, needle)).toEqual(output);
  });

  it('should work for simple case 2', function() {
    const haystack = 'aaaaa',
      needle = 'bba';
    const output = -1;
    expect(strStr(haystack, needle)).toEqual(output);
  });
});
