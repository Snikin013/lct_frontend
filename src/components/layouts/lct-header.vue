<template>
  <header>
    <div class="lct-header">
      <div>
        <router-link :to="{ name: 'mainPage' }" class="lct-header__logo">
          <img src="../../assets/logo.jpg" alt="" />
        </router-link>
        <router-link :to="{ name: 'mainPage' }">RusFuture </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'mainPage' }" class="lct-header__info"
          >Главная
        </router-link>
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
  padding: 16px;
  width: 100%;
  top: 0;
  left: 0;

  &__info {
    margin-right: 40px;
  }
  &__logo {
    margin-right: 40px;
  }
  img {
    width: 50px;
    border-radius: 50%;
  }
}
</style>
