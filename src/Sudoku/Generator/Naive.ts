import type { Board } from "../types";
import type { Generator } from "./interface";

const BOARD_SIZE = 9;

class NaiveGenerator implements Generator {
  board: Board;

  constructor() {
    this.board = [];
  }

  getValidNumbers = (row: number, col: number) => {
    // row constraints
    let constraints = new Set(this.board[row].slice(0, col));

    // column constraints
    for (let i = 0; i < row; i++) {
      constraints.add(this.board[i][col]);
    }

    // submatrix constraints
    let startCol = Math.max(col - (col % 3), 0);
    let startRow = Math.max(row - (row % 3), 0);
    for (let i = startCol; i < startCol + 3; i++) {
      for (let j = startRow; j < startRow + 3; j++) {
        constraints.add((this.board[j] && this.board[j][i]) || undefined);
      }
    }

    let valid = [];
    for (let i = 1; i <= BOARD_SIZE; i++) {
      if (!constraints.has(i)) {
        valid.push(i);
      }
    }

    return valid;
  };

  generate = (): void => {
    let i = 0;

    while (i < BOARD_SIZE) {
      if (!this.board[i]) {
        this.board[i] = [];
      }
      for (let j = 0; j < BOARD_SIZE; j++) {
        let valid = this.getValidNumbers(i, j);

        // TO GENERATE UNTIL SUCCESS (although it may never happen)
        // if (valid.length === 0) {
        //   i = 0;
        //   break;
        // }

        this.board[i][j] = valid[Math.floor(Math.random() * valid.length)];
      }
      i++;
    }
  };

  getBoard = (): Board => {
    return this.board;
  };
}

export default NaiveGenerator;
