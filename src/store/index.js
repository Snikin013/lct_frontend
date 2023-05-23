import { createStore } from "vuex";

import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = { ...commonActions, ...apiRequests };

export default createStore({
  state: {
    graph: {
      data: {
        series: [
          {
            name: "Бронирование за день",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
          },
          {
            name: "Суммарное бронирование",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          },
        ],
        chart_options: {
          chart: {
            height: 350,
            type: "line",
            stacked: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [1, 6, 3],
            curve: "straight",
          },
          colors: ["#02458d", "#f37b09"],
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },

          title: {
            text: "Динамика бронирования рейса",
            align: "left",
            offsetX: 110,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-02-09",
              "2018-02-10",
              "2018-02-11",
              "2018-02-12",
              "2018-02-13",
              "2018-02-14",
              "2018-02-15",
              "2018-02-16",
            ],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#02458d",
              },
              labels: {
                style: {
                  colors: "#02458d",
                },
              },
              tooltip: {
                enabled: true,
              },
            },
            {
              opposite: true,
              axisTicks: {
                show: true,
                color: "#f37b09",
              },
              axisBorder: {
                show: true,
                color: "#f37b09",
              },
              labels: {
                style: {
                  colors: "#f37b09",
                },
              },
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: "topLeft",
              offsetY: 30,
              offsetX: 60,
            },
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40,
          },
        },
      },
    },
    directions: [],
    flightNumbers: [],
    bookingClasses: [],
  },
  mutations,
  actions,
  getters,
});
