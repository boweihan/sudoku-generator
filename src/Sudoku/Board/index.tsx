import * as React from "react";
import "./index.css";
import type { Board } from "../types";

type Props = {
  board: Board;
};

const SudokuBoard = ({ board }: Props) => (
  <div className="board">
    {board.map((column) => (
      <div className="row">
        {column.map((cell) => (
          <div className={`column ${cell ? "" : "empty"}`}>
            <div className="cell">{cell ? cell : ""}</div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default SudokuBoard;
