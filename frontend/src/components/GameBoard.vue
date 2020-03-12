<template>
  <div class="grid">
    <GameBoardCell v-for="value in numOfCells" :position="value" :key="value" />
  </div>
</template>

<script>
import GameBoardCell from "./GameBoardCell.vue";
import Board from "../models/board";

export default {
  name: "GameBoard",
  components: {
    GameBoardCell
  },
  data() {
    return {
      numOfCells: 9
    };
  },
  created() {
    const board = new Board();
    board.buildGrid();
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);/*repeat(3, minmax(150px, 1fr));*/
  grid-template-rows: repeat(3, 100px);/* repeat(3, minmax(150px, 1fr)); */
  justify-content: center;
  grid-gap: 2px;
  border-radius: 5px;
  margin-top: 5%;
}
</style>
