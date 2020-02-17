/*
board = [[1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,0,0,0],
  [0,0,0,1,1],
  [0,0,0,1,1]];
game = new Game(board);
assert.equal(game.play(), 2, "Should return '2'");

board = [[1,0,1,0,1],
         [1,0,1,0,1],
         [1,1,1,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]];
game = new Game(board);
assert.equal(game.play(), 3, "Should return '3'");
*/

export class Game {
  private readonly board: number[][];

  constructor(board: number[][]) {
    this.board = board;
  }

  findFood(): { row: number, column: number } | false {
    for (let row = 0; row < this.board.length; row++) {
      for (let column = 0; column < this.board[0].length; column++) {
        if (this.board[row][column] === 1) {
          return { row, column };
        }
      }
    }

    return false;
  }

  labelFood({ row, column }: { row: number, column: number }) {
    const { numRow, numColumn } = this.getFoodSize();
    if (row >= numRow || row < 0 || column >= numColumn || column < 0 || this.board[row][column] !== 1) {
      return;
    }

    this.board[row][column] = 2;
    this.labelFood({ row: row - 1, column });
    this.labelFood({ row: row + 1, column });
    this.labelFood({ row: row, column: column - 1 });
    this.labelFood({ row, column: column + 1 });
  }

  getFoodSize(): { numRow: number, numColumn: number } {
    return {
      numRow: this.board.length,
      numColumn: this.board[0].length,
    }
  }

  play(): number {
    let counter = 0;
    while (true) {
      const foodPosition = this.findFood();
      if (foodPosition === false) {
        break;
      }

      this.labelFood(foodPosition);
      counter++;
    }

    return counter;
  }
}
