import axios from "axios";

const url = "http://localhost:3000/graphs";

export default {
  GET_GRAPH_FROM_API({ commit }) {
    return axios(url, {
      method: "GET",
    })
      .then((graphs) => {
        commit("SET_GRAPHS_TO_STATE", graphs.data);
        return graphs;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
