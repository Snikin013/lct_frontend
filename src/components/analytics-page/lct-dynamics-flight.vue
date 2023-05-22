<template>
  <div class="lct-dynamic-flight">
    <h1>
      Определение динамики бронирований рейса в разрезе классов бронирования по
      вылетевшим рейсам. (2017-2019 год)
    </h1>
    <apexchart
      v-if="this.GRAPH"
      class="chart"
      type="bar"
      :options="chartOptions"
      :series="this.GRAPH.series"
    ></apexchart>
    <lct-analytics-form />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import lctAnalyticsForm from "./lct-analytics-form.vue";

export default {
  name: "lct-dynamic-flight",
  components: { lctAnalyticsForm },
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
    };
  },
  methods: {
    ...mapActions(["GET_GRAPH_FROM_API"]),
  },
  computed: {
    ...mapGetters(["GRAPH"]),
  },
};
</script>
<style scoped lang="scss">
.chart {
  width: 70%;
  margin: 0 auto;
}
</style>
