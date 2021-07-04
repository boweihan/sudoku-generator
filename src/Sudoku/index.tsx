import * as React from "react";
import Board from "./Board/index";
import Generator from "./Generator/index";
import "./index.css";

const { useState } = React;

const gen = new Generator(10);

const Sudoku = () => {
  const [board, setBoard] = useState([[]]);

  return (
    <div className="sudoku">
      <h1>SUDOKU SOLVER</h1>
      <Board board={board} key={new Date().getTime()} />
      <button
        onClick={() => {
          gen.generate();
          setBoard(gen.getBoard());
        }}
      >
        Generate
      </button>
      <button
        onClick={() => {
          gen.solve();
          setBoard(gen.getBoard());
        }}
      >
        Solve
      </button>
    </div>
  );
};

export default Sudoku;
