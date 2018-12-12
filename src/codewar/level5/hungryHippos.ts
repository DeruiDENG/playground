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

  play(): number {
    let heapCounter = 0;
    for (let row = 0; row < this.board.length; row++) {
      const boardRow = this.board[row];
      for (let column = 0; column < boardRow.length; column++) {
        const currentElement = boardRow[column];
        if (currentElement === 1 && (row === 0 || this.board[row - 1][column] === 0) && (column === 0 || this.board[row][column - 1] === 0)) {
          heapCounter++;
        }
      }
    }

    return heapCounter;
  }
}
