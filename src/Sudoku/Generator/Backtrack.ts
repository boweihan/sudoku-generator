import type { Board } from "../types";
import type { Generator } from "./interface";

const BOARD_SIZE = 9;

function nextEmptySpot(board: Board) {
  let valid = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!board[i][j]) {
        valid.push([i, j]);
        if (valid.length > 1) {
          return valid[Math.floor(Math.random() * valid.length)];
        }
      }
    }
  }

  if (valid.length === 0) {
    return [-1, -1];
  }

  return valid[Math.floor(Math.random() * valid.length)];
}

function checkRow(board: Board, row: number, value: number) {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  return true;
}

function checkColumn(board: Board, column: number, value: number) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }
  return true;
}

function checkSquare(board: Board, row: number, column: number, value: number) {
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(column / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }
  return true;
}

function checkValue(board: Board, row: number, column: number, value: number) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }
  return false;
}

function solve(board: Board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  // there is no more empty spots
  if (row === -1) {
    return board;
  }

  // iterate through all possible values
  // if the board gets solved, then it will simply return (no more empty spots)
  // if nothing is VALID and the board isn't solved, the loop will continue and eventually erase the value in this cell
  // so that more numbers can be tried
  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      solve(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) {
    board[row][col] = undefined;
  }

  return board;
}

class BacktrackGenerator implements Generator {
  board: Board;
  toRemove: number;

  constructor(toRemove: number) {
    this.toRemove = toRemove;
    this.board = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      this.board.push(new Array(BOARD_SIZE));
    }
  }

  reset = (): void => {
    this.board = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      this.board.push(new Array(BOARD_SIZE));
    }
  };

  generate = (): void => {
    this.reset();
    this.board = solve(this.board);
    this.removeCells();
  };

  solve = (): void => {
    this.board = solve([...this.board]);
  };

  removeCells = (): void => {
    let removed = 0;

    while (removed < this.toRemove) {
      let toRemove = Math.floor(Math.random() * 64);
      let row = Math.floor(toRemove / 8);
      let column = toRemove % 8;

      if (!this.board[row][column]) {
        continue;
      }

      let newBoard = [];
      for (let i = 0; i < this.board.length; i++) {
        newBoard.push([...this.board[i]]);
      }
      newBoard[row][column] = undefined;
      newBoard = solve(newBoard);

      if (nextEmptySpot(newBoard)[0] === -1) {
        this.board[row][column] = undefined;
        removed++;
      }
    }
  };

  getBoard = (): Board => {
    return this.board;
  };
}

export default BacktrackGenerator;
