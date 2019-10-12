/**
 * Snail
 * https://www.codewars.com/kata/snail
 */

export function snail(array: number[][]): number[] {
  const snailMap = new SnailMap(array);
  const result = snailMap.move();
  return result;
}

const Direction = {
  East: 0,
  South: 1,
  West: 2,
  North: 3,
};

class SnailMap {
  private array: number[][];
  private currentPos: { row: number, column: number };

  constructor(array: number[][]) {
    this.array = array;
    this.currentPos = { row: 0, column: 0 };
  }

  move(): number[] {
    let result = [...this.array[0]];
    this.currentPos.column = this.array.length - 1;
    const paths: number[] = SnailMap.generateDoubleArray(this.array.length - 1);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const direction = (i + 1) % 4;
      const pastPoints = this.moveStep(path, direction);
      result.push(...pastPoints);
    }

    return result;
  }

  private static generateDoubleArray(start: number) {
    let result = [];
    for (let i = start; i >= 1; i--) {
      result.push(i, i);
    }

    return result;
  }

  moveStep(numSteps: number, direction: number): number[] {
    const pastPoints: number[] = [];
    switch (direction) {
      case Direction.East: {
        for (let i = 0; i < numSteps; i++) {
          this.currentPos.column++;
          pastPoints.push(this.getCurrentPoint());
        }
        break;
      }
      case Direction.South: {
        for (let i = 0; i < numSteps; i++) {
          this.currentPos.row++;
          pastPoints.push(this.getCurrentPoint());
        }
        break;
      }
      case Direction.West: {
        for (let i = 0; i < numSteps; i++) {
          this.currentPos.column--;
          pastPoints.push(this.getCurrentPoint());
        }
        break;
      }
      case Direction.North: {
        for (let i = 0; i < numSteps; i++) {
          this.currentPos.row--;
          pastPoints.push(this.getCurrentPoint());
        }
        break;
      }
    }

    return pastPoints;
  }

  getCurrentPoint() {
    return this.array[this.currentPos.row][this.currentPos.column];
  }
}
