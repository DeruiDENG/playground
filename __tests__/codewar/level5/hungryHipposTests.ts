import { Game } from '../../../src/codewar/level5/hungryHippos';

describe('Sample Tests', function () {
  it('Should pass sample tests', function () {
    let board, game;
    board = [[1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1]];
    game = new Game(board);
    expect(game.play()).toBe(2);

    board = [[1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1]];
    game = new Game(board);
    expect(game.play()).toBe(3);


    board = [[1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1]];
    game = new Game(board);
    expect(game.play()).toBe(13);

    board = [[1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 0, 1]];
    game = new Game(board);
    expect(game.play()).toBe(4);
  });
});
