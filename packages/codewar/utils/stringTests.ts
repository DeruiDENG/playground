import { reverse } from './string';

describe('string util tests', function () {
  it('should reverse work', function () {
    expect(reverse('abcde')).toBe('edcba');
    expect(reverse('ab c de')).toBe('ed c ba');
    expect(reverse('  c de')).toBe('ed c  ');
  });
});
