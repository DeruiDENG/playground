/**
 * Create a funnel
 * https://www.codewars.com/kata/create-a-funnel/train/javascript
 */

export class Funnel {
  private container: (number | false)[][] = [
    [false],
    [false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false, false, false],
  ];

  fill(...nums: number[]) {
    nums.forEach(num => this.fillSingle(num));
  }

  setContainer(container) {
    this.container = container;
  }

  fillSingle(num: number) {
    const emptySpace = this.findNextEmptySpace();
    if (emptySpace !== false) {
      this.container[emptySpace.row][emptySpace.column] = num;
    }
  }

  drip(): number | null {
    const result = this.container[0][0];
    if (result === false) {
      return null;
    }

    this.container[0][0] = false;
    while (true) {
      const hole = this.findHole();
      if (hole === false) {
        break;
      }

      const left = { row: hole.row + 1, column: hole.column };
      const right = { row: hole.row + 1, column: hole.column + 1 };
      const leftWeight = this.calculateWeight(left.row, left.column);
      const rightWeight = this.calculateWeight(right.row, right.column);
      if (leftWeight >= rightWeight) {
        this.container[hole.row][hole.column] = this.container[left.row][
          left.column
        ];
        this.container[left.row][left.column] = false;
      } else {
        this.container[hole.row][hole.column] = this.container[right.row][
          right.column
        ];
        this.container[right.row][right.column] = false;
      }
    }

    return result;
  }

  calculateWeight(row: number, column: number): number {
    if (this.container[row][column] === false) {
      return 0;
    }

    if (row === this.container.length - 1) {
      return 1;
    }

    let count = 1;
    this.container.forEach((rowEle, rowIndex) => {
      rowEle.forEach((ele, columnIndex) => {
        if (
          rowIndex > row &&
          columnIndex >= column &&
          columnIndex <= column + rowIndex - row &&
          this.container[rowIndex][columnIndex] !== false
        ) {
          count++;
        }
      });
    });

    return count;
  }

  toString(): string {
    return [...this.container]
      .reverse()
      .map(row => Funnel.toRowString(row))
      .join('\n');
  }

  static toRowString(row: (number | false)[]) {
    const paddingSpace = 5 - row.length;
    return `${' '.repeat(paddingSpace)}\\${row
      .map(ele => (ele === false ? ' ' : ele.toString()))
      .join(' ')}/`;
  }

  private findNextEmptySpace(): { row: number; column: number } | false {
    let result: { row: number; column: number } | false = false;
    this.container.forEach((row, rowIndex) => {
      const columnIndex = row.findIndex(value => value === false);
      if (columnIndex !== -1 && result === false) {
        result = { row: rowIndex, column: columnIndex };
      }
    });

    return result;
  }

  private findHole(): { row: number; column: number } | false {
    let result: { row: number; column: number } | false = false;
    this.container.forEach((row, rowIndex) => {
      const columnIndex = row.findIndex(
        (value, columnIndex) =>
          value === false &&
          rowIndex !== this.container.length - 1 &&
          (this.container[rowIndex + 1][columnIndex] !== false ||
            this.container[rowIndex + 1][columnIndex + 1] !== false)
      );
      if (columnIndex !== -1 && result === false) {
        result = { row: rowIndex, column: columnIndex };
      }
    });

    return result;
  }
}
