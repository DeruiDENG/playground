import { assert } from 'chai';
import { findTheNotFittingElement } from './whatDoesNotBelong';

describe('solution', function() {
  it('exampleTests', function() {
    assert.equal(findTheNotFittingElement([1, 2, 2, 2, 2]), 1);
    assert.equal(findTheNotFittingElement([1, 3, 5, 7, 2]), 2);
    assert.equal(
      findTheNotFittingElement([true, true, true, false, true]),
      false
    );
    assert.equal(
      findTheNotFittingElement(['a', 'a', 'b', 'a', 'a', 'a', 'a']),
      'b'
    );
    assert.equal(findTheNotFittingElement(['1', 2, '4', '6', '8']), 2);
    assert.equal(findTheNotFittingElement([2, 2, 2, 2, 2, '2']), '2');
    assert.equal(findTheNotFittingElement([1, 2, 4, 6, true]), true);
    assert.equal(findTheNotFittingElement([1, 2, 4, 6, 10]), 1);
    assert.equal(findTheNotFittingElement([2, 2, -2, 6, 10]), -2);
    assert.equal(findTheNotFittingElement(['Z', 'L', 'P', 't', 'G']), 't');
    assert.equal(findTheNotFittingElement(['Z', 'L', '3', 't', 'G']), '3');
    assert.equal(findTheNotFittingElement(['Z', 'L', '3', 't', 4]), 4);
    assert.equal(findTheNotFittingElement(['Z', 'e', '.', 'a', 'G']), '.');
  });
});
