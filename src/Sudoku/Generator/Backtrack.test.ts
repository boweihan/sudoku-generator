import Generator from "./Backtrack";

describe("BacktrackGenerator", () => {
  //   it("returns a 9 by 9 jagged array", () => {
  //     let gen = new Generator();
  //     gen.generate();
  //     let board = gen.getBoard();
  //     expect(board.length).toEqual(9);
  //     expect(board[0].length).toEqual(9);
  //   });

  //   it("ensures that the rows only have one of each 1-N", () => {
  //     let gen = new Generator();
  //     gen.generate();
  //     let board = gen.getBoard();
  //     expect(board[0].sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  //   });

  it("ensures that the columns only have one of each 1-N", () => {
    let gen = new Generator();
    gen.generate();
    let board = gen.getBoard();

    let column = [];
    for (let i = 0; i < 9; i++) {
      column.push(board[i][3]);
    }

    expect(column.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
