<template>
  <div class="lct-forecasting-demand">
    <h1>
      Прогнозирование спроса в разрезе классов бронирования для продаваемых
      рейсов. (2018-2019 год)
    </h1>
    <div id="chart">
      <apexchart
        v-if="this.GRAPH"
        class="chart"
        type="bar"
        :options="this.GRAPH.data.chart_options"
        :series="this.GRAPH.data.series"
      ></apexchart>
    </div>
    <lct-analytics-form />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import lctAnalyticsForm from "./lct-analytics-form.vue";

export default {
  name: "lct-forecasting-demand",
  components: { lctAnalyticsForm },
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
