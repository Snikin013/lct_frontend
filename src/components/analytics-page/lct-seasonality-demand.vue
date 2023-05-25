<template>
  <div class="lct-seasonality-demand">
    <lct-analytics-form :showFlightDate="false" :link="`seasonality`" />
    <apexchart
      v-if="this.GRAPH"
      type="bar"
      :options="this.GRAPH.data.chart_options"
      :series="this.GRAPH.data.series"
      class="chart"
    ></apexchart>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import lctAnalyticsForm from "./lct-analytics-form.vue";

export default {
  name: "lct-seasonality-demand",
  components: { lctAnalyticsForm },
  methods: {
    ...mapActions(["GET_GRAPH_SEASONALITY_FROM_API"]),
  },
  computed: {
    ...mapGetters(["GRAPH"]),
  },
};
</script>

<style scoped lang="scss">
.lct-seasonality-demand {
  display: flex;
  margin-top: 30px;
}

.chart {
  width: 70%;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .lct-seasonality-demand {
    display: flex;
    flex-direction: column;
  }
}
</style>
