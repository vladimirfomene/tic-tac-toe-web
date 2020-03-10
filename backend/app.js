const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

const winnerController = require("./controllers/winners");
const aiController = require("./controllers/ai");

router.route("/winners")
    .get(winnerController.getWinners)
    .post(winnerController.createWinner);

router.route("/ai")
    .get(aiController.findBestMove);

// Mount router
app.use("/", router);

app.listen(port, () => {
  console.log(`Tic Tac Toe-API is running on port ${port}`);
});