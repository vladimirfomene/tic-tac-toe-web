<template>
  <div class="start-dialog" v-if="isVisible">
    <div class="field">
      <input
        type="text"
        v-model.trim="playerName"
        placeholder="Player name"
      />
    </div>
    <div class="field">
      <select v-model="playerSymbol">
        <option disabled value="">Please select one</option>
        <option value="o">Circle</option>
        <option value="x">Cross</option>
      </select>
    </div>
    <div class="field">
      <button @click="startGame">Start Game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartGameDialog",
  data() {
    return {
      playerName: "",
      playerSymbol: "",
      isVisible: true
    };
  },
  methods: {
    startGame() {
      let players = [
        {
          name: this.playerName,
          type: "human",
          symbol: this.playerSymbol
        },
        {
          name: "computer",
          type: "ai",
          symbol: this.playerSymbol === "x" ? "o" : "x"
        }
      ];
      localStorage.setItem("players", JSON.stringify(players));
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
.start-dialog {
  justify-self: center;
  background-color: #f1f1f1;
  border: 1px solid #c6c7cc;
  padding-left: 30px;
  border-radius: 5%;
}

div.field {
  margin: 5% auto;
}

.field input[type="text"] {
  width: 86%;
}

.field select {
  width: 86%;
}

.field button {
  width: 86%;
  padding-top: 2%;
  padding-bottom: 2%;
}
</style>
