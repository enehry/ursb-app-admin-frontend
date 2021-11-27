import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";

const state = {
  coursesProspectus: [],
  prospectus: [],
};
const getters = {
  coursesProspectus: (state) => state.coursesProspectus,
  prospectus: (state) => state.prospectus,
};
const mutations = {
  setCoursesProspectus(state, values) {
    state.coursesProspectus = values;
  },
  setProspectus(state, values) {
    state.prospectus = values;
  },
};
const actions = {
  async getAllCoursesProspectusByUser({ commit }) {
    try {
      const res = await http.get("api/admin/prospectus");
      commit("setCoursesProspectus", res.data.data);
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async getProspectus({ commit }, id) {
    try {
      const res = await http.get(`api/admin/prospectus/${id}`);
      commit("setProspectus", res.data.data);
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async uploadProspectus({ dispatch }, data) {
    try {
      const res = await http.post("api/admin/prospectus-import", data);
      dispatch("getProspectus", data.get("id"));
      console.log(res.data);
      notify({
        group: "no_button",
        title: "Success",
        max: 1,
        data: {
          type: "success",
          message: res.data.message,
        },
      });
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async resetProspectus({ commit }, id) {
    try {
      const res = await http.delete(`api/admin/prospectus/${id}/reset`);
      commit("setProspectus", []);
      notify({
        group: "no_button",
        title: "Success",
        max: 1,
        data: {
          type: "trash",
          message: res.data.message,
        },
      });
    } catch (ex) {
      console.log(ex.response);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
