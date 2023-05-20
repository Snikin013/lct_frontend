<template>
  <div class="lct-dynamic-flight">
    <h1>
      Определение динамики бронирований рейса в разрезе классов бронирования по
      вылетевшим рейсам. (2017-2019 год)
    </h1>
    <router-link :to="{ name: 'analyticsPage' }">Назад </router-link>
    <apexchart
      class="chart"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "lct-dynamic-flight",
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.chart {
  width: 70%;
  margin: 0 auto;
}
</style>
