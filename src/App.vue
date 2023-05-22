<template>
  <div id="app">
    <lctMainWrapper />
  </div>
</template>

<script>
import lctMainWrapper from "./components/lct-main-wrapper.vue";

export default {
  name: "App",
  components: { lctMainWrapper },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
