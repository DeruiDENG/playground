/**
 * Twice Linear Problem in https://www.codewars.com/kata/5672682212c8ecf83e000050/train/typescript
 */

const getDoubleLinear = (n: number): [number, number] => {
  return [2 * n + 1, 3 * n + 1];
};

export class G964 {
  public static dblLinear(n) {
    const sequence: number[] = [1];
    let pointer = 0;
    while (pointer < n) {
      sequence.push(...getDoubleLinear(sequence[pointer++])
        .filter(num => !sequence.some(seqNum => seqNum === num)));
      sequence.sort((a, b) => a - b)
    }

    return sequence[n];
  }
}
