import type { Board } from "../types";

interface Generator {
  generate: () => void;
  getBoard: () => Board;
}

export { Generator };
