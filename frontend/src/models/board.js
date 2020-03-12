class Board {
  /**
   * Build a 3x3 grid to represent the game board
   */
  buildGrid() {
    const grid = new Array(3);
    for (let k = 0; k < grid.length; k++) {
      grid[k] = new Array(3);
    }

    let count = 1;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        grid[i][j] = count++;
      }
    }
    localStorage.setItem("grid", JSON.stringify(grid));
    return grid;
  }

  /**
   * Checks a grid (3x3 array) to see if it is full.
   * @returns {boolean} - true if full, false otherwise
   */
  isGridFull() {
    let grid = JSON.parse(localStorage.getItem("grid"));
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (typeof grid[i][j] === "number") return false;
      }
    }
    return true;
  }

  /**
   * Check if a particular cell is empty
   * @param {number} position - this represents a particular cell on the game board
   * @returns {boolean} - true if empty, false otherwise
   */
  isPositionEmpty(position) {
    if (position < 1 || position > 9) return false;

    let grid = JSON.parse(localStorage.getItem("grid"));
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === position) return true;
      }
    }
    return false;
  }

  /**
   * Get indices of a particular cell given the position on the game board
   * @param {number} position - particular cell on the game board
   * @returns {object} - with i attribute for row and j for column
   */
  getPositionIndices(position) {
    let grid = JSON.parse(localStorage.getItem("grid"));
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === position) return { i, j };
      }
    }
  }

  /**
   * Updates a particular cell on the grid
   * @param {number} i - row of cell to be updated
   * @param {number} j - column of cell to be updated
   * @param {string} character - character to place in cell
   */
  updateGrid(i, j, character) {
    let grid = JSON.parse(localStorage.getItem("grid"));
    grid[i][j] = character;
    localStorage.setItem("grid", JSON.stringify(grid));
  }
}

export default Board;
