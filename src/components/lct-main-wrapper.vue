<template>
  <div class="lct-main-wrapper">
    <lctHeader />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import lctHeader from "./layouts/lct-header";

export default {
  name: "lctMainWrapper",
  components: {
    lctHeader,
  },
};
</script>

<style scoped lang="scss">
.lct-main-wrapper {
  margin: 0 auto;
}
</style>
