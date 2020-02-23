import { addTwoNumbers } from './question';

describe('quesitons', () => {
  it('should work', () => {
    const l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    const l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null,
        },
      },
    };
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual({ val: 7, next: { val: 0, next: { val: 8 } } });
  });
});
