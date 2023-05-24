<template>
  <header>
    <div class="lct-header">
      <div class="lct-left">
        <router-link :to="{ name: 'mainPage' }" class="lct-header__logo">
          <img src="../../assets/logo.jpg" alt="" />
        </router-link>

        <router-link :to="{ name: 'mainPage' }">
          <a-button type="primary" class="btn lct-header__logo"
            >RusFuture</a-button
          >
        </router-link>
        <h2>- ПРОАНАЛИЗИРУЙ СВОЙ ПУТЬ!</h2>
      </div>

      <div>
        <router-link :to="{ name: 'mainPage' }" class="lct-header__info">
          <a-button type="primary" class="btn btn-revert">Главная</a-button>
        </router-link>
        <router-link :to="{ name: 'analyticsPage' }">
          <a-button type="primary" class="btn">Аналитика</a-button>
        </router-link>
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
  .lct-left {
    display: flex;
    align-items: center;
    h2 {
      margin: 0;
    }
  }
  &__info {
    margin-right: 30px;
  }
  &__logo {
    margin-right: 30px;
  }
  img {
    width: 50px;
    border-radius: 50%;
  }
  .btn {
    border-radius: 10px;
    background-color: #02458d;
    border-color: #02458d;
  }

  .btn-revert {
    border-radius: 15px;
    background: white;
    color: #02458d;
    border-color: white;
    border: 1px solid #02458d;
  }
}
</style>
