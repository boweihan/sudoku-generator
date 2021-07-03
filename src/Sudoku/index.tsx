import * as React from "react";
import Board from "./Board/index";
import Generator from "./Generator/Naive";
import "./index.css";

const { useState } = React;

const Sudoku = () => {
  const [board, setBoard] = useState([[]]);
  return (
    <div className="sudoku">
      <h1>SUDOKU SOLVER</h1>
      <Board board={board} />
      <button
        onClick={() => {
          let gen = new Generator();
          gen.generate();
          setBoard(gen.getBoard());
        }}
      >
        Generate
      </button>
      <button>Solve</button>
    </div>
  );
};

export default Sudoku;
