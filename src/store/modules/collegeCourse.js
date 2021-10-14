import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";

const state = {
  collegesAndCourses: [],
  collegeCourseErrors: null,
  courses: [],
  college_name: "",
  college: [],
};
const getters = {
  collegesAndCourses: (state) => state.collegesAndCourses,
  collegeCourseErrors: (state) => state.collegeCourseErrors,
  courses: (state) => state.courses,
  college_name: (state) => state.college_name,
  college: (state) => state.college,
};
const actions = {
  async getCollegesAndCourses({ commit, state }) {
    try {
      const res = await http.get("api/admin/college/course/All");
      commit("setCollegesAndCourses", res.data.collegesAndCourses);
      commit(
        "setCourses",
        state.courses.length <= 0
          ? res.data.collegesAndCourses[0]
          : res.data.collegesAndCourses.find((x) => x.id === state.college.id)
      );
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async saveCollege({ dispatch, commit }, payload) {
    console.log(payload);
    try {
      const res = await http.post("api/admin/college/create", payload);
      notify({
        group: "admin",
        title: "College Successfully Added",
        text: res.data.message,
        type: "success",
      });

      dispatch("getCollegesAndCourses");
      return true;
    } catch (ex) {
      console.log(ex.response);
      if (ex.response.status == 422) {
        commit("setErrors", ex.response.data);
      }
      return false;
    }
  },

  async updateCollege({ dispatch, commit }, payload) {
    try {
      const res = await http.put("api/admin/college/update", payload);
      notify({
        group: "admin",
        title: "College Notification Success",
        text: res.data.message,
        type: "success",
      });

      dispatch("getCollegesAndCourses");
      return true;
    } catch (ex) {
      console.log(ex.response);
      if (ex.response.status == 422) {
        commit("setErrors", ex.response.data);
      }
      return false;
    }
  },
  async deleteCollege({ dispatch, commit }, id) {
    try {
      const res = await http.get(`api/admin/college/delete/${id}`);
      dispatch("getCollegesAndCourses");
      commit("setCourses", []);
      notify({
        group: "admin",
        title: "Success",
        text: res.data.message,
        type: "success",
      });

      return true;
    } catch (ex) {
      console.log(ex);
      if (ex.response.status == 422) {
        console.log(ex.response.data);
      }
      return false;
    }
  },
  async saveCourse({ dispatch, commit }, payload) {
    console.log(payload);

    try {
      const res = await http.post("api/admin/course/create", payload);
      notify({
        group: "admin",
        title: "Success",
        text: res.data.message,
        type: "success",
      });
      dispatch("getCollegesAndCourses");
      return true;
    } catch (ex) {
      console.log(ex.response);
      if (ex.response.status == 422) {
        commit("setErrors", ex.response.data);
      }
      return false;
    }
  },
  async deleteCourse({ dispatch }, id) {
    try {
      const res = await http.get(`api/admin/course/delete/${id}`);
      dispatch("getCollegesAndCourses");
      notify({
        group: "admin",
        title: "Success",
        text: res.data.message,
        type: "success",
      });

      return true;
    } catch (ex) {
      console.log(ex);
      if (ex.response.status == 422) {
        console.log(ex.response.data);
      }
      return false;
    }
  },
  async updateCourse({ dispatch, commit }, payload) {
    try {
      const res = await http.put("api/admin/course/update", payload);
      notify({
        group: "admin",
        title: "Success",
        text: res.data.message,
        type: "success",
      });

      dispatch("getCollegesAndCourses");
      return true;
    } catch (ex) {
      console.log(ex.response);
      if (ex.response.status == 422) {
        commit("setErrors", ex.response.data);
      }
      return false;
    }
  },

  selectCollegeForCourses({ commit }, values) {
    commit("setCourses", values);
  },
  resetCollegeCourseErrors({ commit }) {
    commit("setErrors", null);
  },
  editCollege({ commit }, college) {
    commit("setCollege", college);
  },
};

const mutations = {
  setCollegesAndCourses(state, values) {
    state.collegesAndCourses = values;
  },
  setErrors(state, values) {
    state.collegeCourseErrors = values;
  },
  setCourses(state, values) {
    state.college = values;
    state.courses = values.course;
    state.college_name = values.name;
  },
  setCollege(state, value) {
    state.college = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
