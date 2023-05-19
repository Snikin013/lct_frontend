<template>
  <header>
    <div class="lct-header">
      <div class="lct-header__logo">
        <router-link :to="{ name: 'mainPage' }">
          <img src="../../assets/logo.png" alt="" />
        </router-link>
        <router-link :to="{ name: 'mainPage' }">RusFuture </router-link>
      </div>
      <div class="lct-info">
        <router-link :to="{ name: 'mainPage' }">Главная </router-link>
        <router-link :to="{ name: 'analyticsPage' }">Аналитика </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header",
};
</script>

<style lang="scss">
.lct-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #656293;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  img {
    width: 50px;
    border-radius: 50%;
  }
}
</style>
