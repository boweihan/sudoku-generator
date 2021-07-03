import * as ReactDOM from "react-dom";
import * as React from "react";
import Sudoku from "./Sudoku/index";

const App = () => {
  return <Sudoku />
};

ReactDOM.render(<App />, document.getElementById("app"));
