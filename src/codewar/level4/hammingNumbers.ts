export function hamming(n: number): number {
  let count = 0;
  let num = 1;
  while (true) {
    if (isHamming(num)) {
      count++;
    }

    if (count === n) {
      return num;
    }

    num++;
  }
}

function isHamming(n: number): boolean {
  while (n % 2 === 0) {
    n /= 2;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  while (n % 5 === 0) {
    n /= 5;
  }

  return n === 1;
}

