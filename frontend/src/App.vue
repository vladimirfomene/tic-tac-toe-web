<template>
  <div id="app">
    <Header class="header"></Header>
    <StartGameDialog class="dialog"></StartGameDialog>
    <display-leader-board class="display-leader"></display-leader-board>
    <GameBoard class="board"></GameBoard>
    <leader-board class="leader-board"></leader-board>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import GameBoard from "./components/GameBoard.vue";
import StartGameDialog from "./components/StartGameDialog.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import DisplayLeaderBoard from "./components/DisplayLeaderBoard.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    GameBoard,
    StartGameDialog,
    LeaderBoard,
    DisplayLeaderBoard
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: min-content min-content min-content min-content min-content;
}

.header {
  grid-column: 2 / 3;
}

.dialog {
  grid-column: 2 / 3;
}

.board {
  grid-column: 2 / 3;
}

.footer {
  grid-column: 2 / 3;
}

.leader-board {
  grid-column: 2 / 3;
}

.display-leader {
  grid-column: 2 / 3;
}
</style>
