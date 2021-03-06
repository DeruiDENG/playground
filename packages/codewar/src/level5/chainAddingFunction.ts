/*
We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
and so on.

  A single call should return the number passed in.

add(1); // 1
We should be able to store the returned values and reuse them.

  var addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10
We can assume any number being passed in will be valid whole number.
*/

function addX(this: { total: number }, x: number) {
  const total = this.total + x;
  const result = addX.bind({ total });
  result.toString = function(): string {
    return total.toString();
  };

  return result;
}

export default function add(x: number) {
  return addX.bind({ total: 0 })(x);
}
