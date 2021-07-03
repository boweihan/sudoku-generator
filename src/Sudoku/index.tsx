import * as React from "react";
import Board from "./Board/index";
import "./index.css";

const Sudoku = () => {
  return (
    <div className="sudoku">
      <h1>SUDOKU SOLVER</h1>
      <Board
        rows={[
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, undefined, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, undefined, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ]}
      />
      <button>Reset</button>
      <button>Solve</button>
    </div>
  );
};

export default Sudoku;
