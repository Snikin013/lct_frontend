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
        :options="chartOptions"
        :series="this.GRAPH.series"
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
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
          ],
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
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
