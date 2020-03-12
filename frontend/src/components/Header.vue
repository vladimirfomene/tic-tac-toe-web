<template>
  <div class="game-title">
    <span class="tic">Tic </span>
    <span class="tac">Tac </span>
    <span class="toe">Toe </span>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.game-title {
  justify-self: center;
  align-self: center;
  font-family: "Pacifico", cursive;
  font-weight: bold;
  font-size: 300%;
}
.tic {
  color: #fbbc05;
}
.tac {
  color: #ea4335;
}

.toe {
  color: #34a853;
}
</style>
