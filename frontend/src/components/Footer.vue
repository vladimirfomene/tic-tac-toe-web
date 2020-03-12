<template>
  <footer>
    Made with <span class="heart-icon">&hearts;</span> in Cameroon
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.heart-icon {
  font-size: 100%;
  color: red;
}

footer {
  font-family: "Oswald", sans-serif;
  font-size: 100%;
  font-weight: bold;
  margin-top: 10px;
  justify-self: center;
  align-self: end;
}
</style>
