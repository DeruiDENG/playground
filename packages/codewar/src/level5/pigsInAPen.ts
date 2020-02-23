/**
 * Pig In A Pen Game
 *
 * https://www.codewars.com/kata/pigs-in-a-pen/typescript
 */

type Square = [number, number, number, number];

export class Game {
  private connectedEdge: number[];
  private readonly dimension: number;

  constructor(board: number) {
    this.connectedEdge = [];
    this.dimension = board;
  }

  getFirstAvailableSquare(): Square {
    for (
      let squareIndex = 0;
      squareIndex < this.dimension * this.dimension;
      squareIndex++
    ) {
      const square = this.getSquare(squareIndex);
      if (this.isSquareAvailable(square)) {
        return square;
      }
    }
  }

  getSquare(squareIndex: number): Square {
    const [squareColumn, squareRow] = [
      (squareIndex - (squareIndex % this.dimension)) / this.dimension,
      squareIndex % this.dimension,
    ];
    const firstLine = squareRow * (this.dimension * 2 + 1) + squareColumn + 1;
    return [
      firstLine,
      firstLine + this.dimension,
      firstLine + this.dimension + 1,
      firstLine + this.dimension * 2 + 1,
    ];
  }

  getSquareMissingEdges(square: Square): number[] {
    return square.filter(
      edge => !this.connectedEdge.some(connectEdge => connectEdge === edge)
    );
  }

  isSquareAvailable(square: Square): boolean {
    return this.getSquareMissingEdges(square).length === 1;
  }

  fillMissingEdges(square: Square) {
    this.connectedEdge.push(...this.getSquareMissingEdges(square));
  }

  play(lines: number[]): number[] {
    this.connectedEdge = lines;
    while (true) {
      const firstFillableSquare = this.getFirstAvailableSquare();
      if (!firstFillableSquare) {
        break;
      }

      this.fillMissingEdges(firstFillableSquare);
    }

    return this.connectedEdge.sort((a, b) => a - b);
  }
}
