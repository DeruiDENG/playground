export const a = [0, false, '', null, undefined];
export const b = [true, 1, '55', { a: 5, valueOf: () => 0 }];

export function findMatch(): [any, any] {
  let result: [any, any] = null;
  a.forEach(aEle => {
    b.forEach(bEle => {
      if (aEle == bEle) {
        result = [aEle, bEle];
      }
    });
  });

  return result;
}
