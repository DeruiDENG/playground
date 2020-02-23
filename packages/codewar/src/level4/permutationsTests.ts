import { permutations } from './permutations';

describe('permutations', function() {
  it('examples from description', function() {
    expect(permutations('a')).toEqual(['a']);
    expect(permutations('ab').sort()).toEqual(['ab', 'ba'].sort());
    expect(permutations('aabb').sort()).toEqual(
      ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()
    );
  });
});
