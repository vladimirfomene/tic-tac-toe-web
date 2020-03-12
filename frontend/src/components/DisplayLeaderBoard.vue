<template>
  <div class="leader-container">
    <button class="btn-leader" @click="displayLeaderBoard">
      Display LeaderBoard
    </button>
  </div>
</template>

<script>
import EventBus from "../event_bus";

export default {
  name: "DisplayLeaderBoard",
  methods: {
    displayLeaderBoard() {
      EventBus.$emit("display-leaderboard");
    }
  }
};
</script>

<style scoped>
.btn-leader {
  background-color: #fbbc05;
  border-radius: 5px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  float: left;
  padding: 8px 16px;
  justify-self: center;
}

.leader-container {
  margin-top: 3%;
  justify-self: center;
}
</style>
