const { Winner } = require("../models/Winner");
const moment = require("moment");

/**
 * Create an entry in the leaderboard database
 * @param {Object} req - expressjs request object
 * @param {Object} res - expressjs response object
 * @returns - returns JSON object for created winner.
 */
exports.createWinner = async (req, res) => {
  try {
    req.body.createdAt = moment().format("YYYY-MM-DD hh:mm:ss");
    req.body.updatedAt = moment().format("YYYY-MM-DD hh:mm:ss");
    const insertedWinner = await Winner.query().insert(req.body);
    return res.status(200).json(insertedWinner);
  } catch (err) {
    return res.status(500).json({ error: err, msg: "winner creation failed" });
  }
};

/**
 * Get winners from leaderboard database
 * @param {Object} req - expressjs request object
 * @param {Object} res - expressjs response object
 * @returns {Array} - returns array of winners objects
 */
exports.getWinners = async (req, res) => {
  try {
    const winners = await Winner.query();
    return res.status(200).json(winners);
  } catch (err) {
    return res.status(500).json({ error: err, msg: "could not get winners" });
  }
};
