<template>
  <div class="lct-analytics-page">
    <h1>Выберите, что хотите проанализировать:</h1>
    <router-link :to="{ name: 'dynamicsFlight' }">
      <h2>
        Определение динамики бронирований рейса в разрезе классов бронирования
        по вылетевшим рейсам. (2017-2019 год)
      </h2>
    </router-link>
    <router-link :to="{ name: 'seasonalityDemand' }">
      <h2>
        Определение сезонности спроса по классам бронирования, по вылетевшим
        рейсам. (2017-2019 год)
      </h2>
    </router-link>
    <router-link :to="{ name: 'determinationDemand' }">
      <h2>
        Определение профилей спроса в разрезе классов бронирования, по
        вылетевшим рейсам. (2017-2019 год)
      </h2>
    </router-link>
    <router-link :to="{ name: 'forecastingDemand' }">
      <h2>
        Прогнозирование спроса в разрезе классов бронирования для продаваемых
        рейсов. (2017-2019 год)
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "lct-analytics-page",
};
</script>

<style scoped></style>
