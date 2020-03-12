import Board from "../models/board";

class GameController {
  constructor() {
    this.board = new Board();
    this.API_URL = "http://localhost:3000";
  }

  /**
   * Check if the game is in a terminating condition and return winning character
   * @param {Grid} board - winning character
   * @returns {string} - "x", "o" or "tie"
   */
  getWinningSymbol(grid) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        return grid[i][0];
      }
    }

    for (let j = 0; j < grid.length; j++) {
      if (grid[0][j] === grid[1][j] && grid[1][j] === grid[2][j]) {
        return grid[0][j];
      }
    }

    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      return grid[0][0];
    }

    if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {
      return grid[2][0];
    }

    if (this.board.isGridFull()) {
      return "tie";
    }

    return null;
  }
}

export default GameController;
