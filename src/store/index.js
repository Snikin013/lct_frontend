import { createStore } from "vuex";

import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = { ...commonActions, ...apiRequests };

export default createStore({
  state: {
    graph: [],
    directions: [],
    flightNumbers: [],
    bookingClasses: [],
  },
  mutations,
  actions,
  getters,
});
