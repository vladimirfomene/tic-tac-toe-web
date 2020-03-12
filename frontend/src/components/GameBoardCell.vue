<template>
  <svg @click="play" viewBox="0 0 128 128" class="cell">
    <path
      v-if="'x' === this.currentPlayerSymbol"
      d="M112,16L16,112"
      style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.765px; stroke-dashoffset: 0px;"
    ></path>
    <path
      v-if="'x' === this.currentPlayerSymbol"
      d="M16,16L112,112"
      style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.765px; stroke-dashoffset: 0px;"
    ></path>
    <path
      v-if="'o' === this.currentPlayerSymbol"
      d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"
      style="stroke: rgb(242, 235, 211); stroke-dasharray: 301.635px; stroke-dashoffset: 0px;"
    ></path>
  </svg>
</template>

<script>
import Board from "../models/board";
import GameController from "../controllers/game_controller";
import axios from "axios";
import EventBus from "../event_bus";

export default {
  name: "GameBoardCell",
  props: ["position"],
  data() {
    return {
      currentPlayerSymbol: "",
      board: null,
      gameController: null
    };
  },
  methods: {
    async play() {
      if (!this.board.isPositionEmpty(this.position)) return;

      if (!localStorage.getItem("players")){
        alert("Please enter your name and select a symbol to start the game");
        return;
      }

      let [humanPlayer, aiPlayer] = this.getPlayers();

      this.currentPlayerSymbol = humanPlayer.symbol;

      const { i, j } = this.board.getPositionIndices(this.position);
      this.board.updateGrid(i, j, this.currentPlayerSymbol);

      const grid = JSON.parse(localStorage.getItem("grid"));
      const winningSymbol = this.gameController.getWinningSymbol(grid);

      if (winningSymbol) {
        let humanScore, aiScore;
        if (winningSymbol === "tie") {
          humanScore = 1;
          aiScore = 1;
          alert("It is a Draw!! 😄");
        } else {
          humanScore = 1;
          aiScore = 0;
          alert("You win!! 😄");
        }

        await this.updateLeaderBoard(this.gameController.API_URL, {
          humanName: humanPlayer.name,
          aiName: aiPlayer.name,
          humanScore,
          aiScore
        });
        localStorage.removeItem("grid");
        localStorage.removeItem("players");
        

        return location.reload();
      }

      let result = await this.getAIPosition(
        this.gameController.API_URL,
        grid,
        aiPlayer
      );

      let position;
      if (result instanceof Error) {
        console.error(result);
      } else {
        position = result.data.position;
      }

      EventBus.$emit("ai-played", {
        position,
        symbol: aiPlayer.symbol
      });
    },
    getAIPosition(apiUrl, grid, aiPlayer) {
      try {
        return axios({
          method: "post",
          url: apiUrl + "/ai",
          data: {
            grid,
            player: aiPlayer
          }
        });
      } catch (err) {
        return err;
      }
    },
    async updateLeaderBoard(apiUrl, data) {
      console.log("I ran");
      try {
        await axios({
          method: "post",
          url: apiUrl + "/winners",
          data
        });
      } catch (err) {
        console.error(err);
      }
    },
    getPlayers() {
      let humanPlayer = JSON.parse(localStorage.getItem("players")).filter(
        player => player.type === "human"
      )[0];
      let aiPlayer = JSON.parse(localStorage.getItem("players")).filter(
        player => player.type === "ai"
      )[0];
      return [humanPlayer, aiPlayer];
    },
    getWinningPlayer(winningSymbol) {
      const winner = JSON.parse(localStorage.getItem("players")).filter(
        player => player.symbol === winningSymbol
      );
      return winner.length === 0 ? null : winner[0];
    }
  },
  created() {
    this.board = new Board();
    this.gameController = new GameController();

    EventBus.$on("ai-played", async event => {
      let [humanPlayer, aiPlayer] = this.getPlayers();

      const grid = JSON.parse(localStorage.getItem("grid"));
      if (this.position === event.position) {
        this.currentPlayerSymbol = event.symbol;
        const { i, j } = this.board.getPositionIndices(this.position);
        this.board.updateGrid(i, j, this.currentPlayerSymbol);
      }

      const winningSymbol = this.gameController.getWinningSymbol(grid);
      if (winningSymbol) {
        let humanScore, aiScore;
        if (winningSymbol === "tie") {
          humanScore = 1;
          aiScore = 1;
          alert("It is a Draw!! 😄");
        } else {
          humanScore = 0;
          aiScore = 1;
          alert("Computer Wins!! 😄");
        }

        localStorage.removeItem("grid");
        localStorage.removeItem("players");

        this.updateLeaderBoard(this.gameController.API_URL, {
          humanName: humanPlayer.name,
          aiName: aiPlayer.name,
          humanScore,
          aiScore
        });
        return location.reload();
      }
    });
  }
};
</script>

<style scoped>
.cell {
  background-color: #34a853;
}
</style>
