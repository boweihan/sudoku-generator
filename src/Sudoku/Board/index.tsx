import * as React from "react";
import "./index.css";

type Props = {
  rows: Array<Array<number>>;
};

const Board = ({ rows }: Props) => {
  return (
    <div className="board">
      {rows.map((column) => {
        return (
          <div className="row">
            {column.map((cell) => {
              return (
                <div className={`column ${cell ? "" : "empty"}`}>
                  <div className="cell">{cell ? cell : ""}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
