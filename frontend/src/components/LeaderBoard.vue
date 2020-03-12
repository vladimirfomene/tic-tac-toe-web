<template>
  <table class="leader-table" v-if="isTableVisible">
    <thead>
      <tr>
        <th v-for="(column, idx) in columns" :key="idx">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, idx) in leaderRows" :key="idx">
        <td v-for="(column, idx) in columns" :key="idx">{{ entry[column] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import GameController from "../controllers/game_controller";
import EventBus from "../event_bus";

export default {
  name: "LeaderBoard",
  data() {
    return {
      columns: ["humanName", "aiName", "humanScore", "aiScore"],
      leaderRows: [],
      isTableVisible: false
    };
  },
  mounted() {
    EventBus.$on("display-leaderboard", () => {
      this.isTableVisible = this.isTableVisible ? false : true;
    });
  },
  async created() {
    const gameController = new GameController();
    let res = await axios({
      method: "get",
      url: gameController.API_URL + "/winners"
    });

    this.leaderRows = res.data.map(entry => {
      delete entry.createdAt;
      delete entry.updatedAt;
      return entry;
    });
  }
};
</script>

<style scoped>
.leader-table {
  margin-top: 1%;
  justify-self: center;
  border-collapse: separate;
  border-spacing: 0;
  color: #4a4a4d;
  font-family: "Helvetica Neue", sans-serif;
}

th,
td {
  padding: 10px 15px;
  vertical-align: middle;
}

thead {
  background: #34a853;
  color: #fff;
}

th:first-child {
  text-align: left;
}

tbody tr:nth-child(even) {
  background: #f0f0f2;
}

td {
  border-bottom: 1px solid #cecfd5;
  border-right: 1px solid #cecfd5;
}

td:first-child {
  border-left: 1px solid #cecfd5;
}
</style>
