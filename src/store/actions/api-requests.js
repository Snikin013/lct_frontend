import axios from "axios";

export default {
  GET_GRAPH_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/directions/", {
      method: "GET",
    })
      .then((graph) => {
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
  GET_FLIGHT_NUMBERS_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/flight_numbers/", {
      method: "GET",
    })
      .then((flightNumbers) => {
        commit("SET_FLIGHT_NUMBERS_TO_STATE", flightNumbers.data);
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
