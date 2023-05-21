<template>
  <div class="lct-determination-demand">
    <h1>
      Определение профилей спроса в разрезе классов бронирования, по вылетевшим
      рейсам. (2017-2019 год)
    </h1>
    <router-link :to="{ name: 'analyticsPage' }">Назад </router-link>
    <apexchart
      type="bar"
      class="chart"
      :options="chartOptions"
      :series="this.GRAPH.series"
    ></apexchart>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "lct-determination-demand",
  data: function () {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          title: {
            text: "Points",
          },
          min: 0,
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
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
