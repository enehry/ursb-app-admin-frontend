import http from "@/includes/http.js";

const state = {
  students: null,
};
const getters = {
  students: (state) => state.students,
};
const mutations = {
  setStudents(state, values) {
    state.students = values;
  },
};
const actions = {
  async getAllStudents({ commit }) {
    try {
      const res = await http.get("api/admin/students/all");
      commit("setStudents", res.data.students);
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
