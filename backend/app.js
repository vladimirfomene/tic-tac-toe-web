const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const port = 3000;

const winnerController = require("./controllers/winners");
const aiController = require("./controllers/ai");

app.use(cors({ origin: "http://localhost:8080" }));
app.use(bodyParser.json());

router.route("/winners")
  .get(winnerController.getWinners)
  .post(winnerController.createWinner);

router.route("/ai")
  .post(aiController.getAIMove);

// Mount router
app.use("/", router);

app.listen(port, () => {
  console.log(`Tic Tac Toe-API is running on port ${port}`);
});
