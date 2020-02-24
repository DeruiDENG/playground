import { Funnel } from './funnel';

describe('funnel', function() {
  it('should toString works', function() {
    const funnel = new Funnel();
    expect(funnel.toString()).toBe(
      `\\         /
 \\       /
  \\     /
   \\   /
    \\ /`
    );
  });

  it('should fill works', function() {
    const funnel = new Funnel();
    funnel.fill(1, 2, 3);
    expect(funnel.toString()).toBe(
      `\\         /
 \\       /
  \\     /
   \\2 3/
    \\1/`
    );
  });

  it('should drip works', function() {
    //    let funnel = new Funnel();
    //    funnel.fill(1, 2, 3);
    //    let result = funnel.drip();
    //    expect(result).toBe(1);
    //    expect(funnel.toString()).toBe(
    //      `\\         /
    // \\       /
    //  \\     /
    //   \\  3/
    //    \\2/`);
    //
    //    funnel = new Funnel();
    //    funnel.fill(1, 2, 3, 4, 5, 6, 7, 8, 9);
    //    result = funnel.drip();
    //    expect(result).toBe(1);
    //    expect(funnel.toString()).toBe(
    //      `\\         /
    // \\  8 9  /
    //  \\7 5 6/
    //   \\4 3/
    //    \\2/`);

    const funnel2 = new Funnel();
    funnel2.setContainer([
      [2],
      [9, 8],
      [0, 2, 1],
      [7, 0, 1, 9],
      [false, 1, 5, false, 9],
    ]);
    const result2 = funnel2.drip();
    expect(result2).toBe(2);
    expect(funnel2.toString()).toBe(
      `\\    5   9/
 \\7 1 1 9/
  \\0 0 1/
   \\9 2/
    \\8/`
    );
  });
});
