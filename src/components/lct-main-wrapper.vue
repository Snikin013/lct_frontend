<template>
  <div class="lct-main-wrapper">
    <lctHeader />
    <hr />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <hr />
    <lctFooter />
  </div>
</template>

<script>
import lctHeader from "./layouts/lct-header";
import lctFooter from "./layouts/lct-footer";

export default {
  name: "lctMainWrapper",
  components: {
    lctHeader,
    lctFooter,
  },
};
</script>

<style scoped lang="scss">
.lct-main-wrapper {
  margin: 0 auto;
}
</style>
