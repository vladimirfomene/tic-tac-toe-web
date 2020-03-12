/**
 * Initialize the scores object used by the minimax algorithm.
 */
const scores = {
  human: -10,
  ai: 10,
  tie: 0
};

/**
 * Initialize the two players array  with a computer player
 * and a human player. (To be used by the minimax algorithm)
 */
const players = [
  {
    type: "human",
    name: "vlad",
    symbol: "x"
  },
  {
    type: "ai",
    name: "computer",
    symbol: "o"
  }
];

/**
 * Get next move for the AI player using the Minimax algorithm.
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {Object} - the position from the minimax algorithm or an error in
 * case of a failure.
 */
function getAIMove (req, res) {
  players[1].symbol = req.body.player.symbol;
  players[0].symbol = (req.body.player.symbol === "o") ? "x" : "o";
  try {
    const position = findBestMove(req.body.grid, req.body.player);
    return res.status(200).json({ position });
  } catch (err) {
    return res.status(500).json({ msg: "failed to get AI move" });
  }
}

/**
   * Use the minimax algorithm to play all possible game scenario from the
   * current state of the board to figure out the most optimal move.
   * @param {Array} grid - 2-D array for board grid
   * @param {Player} player - instance of ai player
   * @returns {number} - optimal cell position
   */
function findBestMove (grid, player) {
  let bestMove = -1;
  let optimalVal = -Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (typeof grid[i][j] === "number") {
        const position = grid[i][j];
        grid[i][j] = player.symbol;
        const val = minimax(grid, false);
        grid[i][j] = position;
        if (val > optimalVal) {
          optimalVal = val;
          bestMove = position;
        }
      }
    }
  }
  return bestMove;
}

/**
   * Implements the minimax algorithm by playing all possible scenario from
   * current game board using maximizer and minimizer.
   * @param {Grid} board - instance of the Grid class (game board)
   * @param {boolean} isMaximizer - tells if player is maximizer or minimizer
   * @returns {number} - optimal value from minimax
   */
function minimax (grid, isMaximizer) {
  const winner = getWinner(grid);
  if (winner !== null) {
    return evaluation(winner);
  }

  if (isMaximizer) {
    let maxVal = -Infinity;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (typeof grid[i][j] === "number") {
          const position = grid[i][j];
          grid[i][j] = players[1].symbol;
          const val = minimax(grid, false);
          grid[i][j] = position;
          maxVal = Math.max(maxVal, val);
        }
      }
    }
    return maxVal;
  } else {
    let minVal = Infinity;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (typeof grid[i][j] === "number") {
          const position = grid[i][j];
          grid[i][j] = players[0].symbol;
          const val = minimax(grid, true);
          grid[i][j] = position;
          minVal = Math.min(minVal, val);
        }
      }
    }
    return minVal;
  }
}

/**
   * Check if the game is in a terminating condition and return winning character
   * @param {Array} grid - board grid
   * @returns {string} - "x", "o" or "tie"
   */
function getWinner (grid) {
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

  if (isGridFull(grid)) {
    return "tie";
  }

  return null;
}

/**
   * Checks a grid (3x3 array) to see if it is full.
   * @returns {boolean} - true if full, false otherwise
   */
function isGridFull (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (typeof grid[i][j] === "number") return false;
    }
  }
  return true;
}

/**
   * Gets the score from a winning character
   * @param {String} winningSymbol - "x", "o" or "tie"
   * @returns {number} - score for winning character
   */
function evaluation (winningSymbol) {
  const winner = players.filter(player => player.symbol === winningSymbol);
  if (winner.length === 1 && winner[0].type === "human") return scores.human;
  if (winner.length === 1 && winner[0].type === "ai") return scores.ai;
  if (winner.length === 0) return scores.tie;
}

exports.findBestMove = findBestMove;
exports.minimax = minimax;
exports.getWinner = getWinner;
exports.isGridFull = isGridFull;
exports.evaluation = evaluation;
exports.getAIMove = getAIMove;
