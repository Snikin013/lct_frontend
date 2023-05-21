import axios from "axios";

export default {
  GET_GRAPH_FROM_API({ commit }, graphParams) {
    return axios(
      `http://46.243.227.152:8000/api/v1/calculation/demand-profile?direction=${graphParams.direction}&flight_number=${graphParams.flight_number}&booking_class=${graphParams.booking_class}&booking_start=${graphParams.booking_start}&booking_end=${graphParams.booking_end}&`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        console.log(graph.data);
        commit("SET_GRAPH_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_DIRECTIONS_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/directions/", {
      method: "GET",
    })
      .then((directions) => {
        commit("SET_DIRECTIONS_TO_STATE", directions.data);
        return directions;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_FLIGHT_NUMBERS_FROM_API({ commit }, direction) {
    return axios(
      `http://46.243.227.152:8000/api/v1/filters/flight_numbers/?direction=${direction}`,
      {
        method: "GET",
      }
    )
      .then((flightNumbers) => {
        commit("SET_FLIGHT_NUMBERS_TO_STATE", flightNumbers.data);
        console.log(flightNumbers.data);
        return flightNumbers;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_BOOKING_CLASSES_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/booking_classes", {
      method: "GET",
    })
      .then((bookingClasses) => {
        commit("SET_BOOKING_CLASSES_TO_STATE", bookingClasses.data);
        return bookingClasses;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
