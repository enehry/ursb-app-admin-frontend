import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";
import router from "@/router/index.js";

const state = {
  updateUserData: null,
  changeOwnPasswordError: null,
  browserSessions: [],
  minGradeQpa: null,
};
const getters = {
  updateUserData: (state) => state.updateUserData,
  changeOwnPasswordError: (state) => state.changeOwnPasswordError,
  browserSessions: (state) => state.browserSessions,
  minGradeQpa: (state) => state.minGradeQpa,
};
const mutations = {
  setUpdateUserData(state, user) {
    state.updateUserData = user;
  },
  setChangeOwnPasswordError(state, error) {
    state.changeOwnPasswordError = error;
  },
  setBrowserSessions(state, sessions) {
    state.browserSessions = sessions;
  },
  setMinGradeQpa(state, gradeQpa) {
    state.minGradeQpa = gradeQpa;
  },
};
const actions = {
  async getMinGradeQpa({ commit }) {
    try {
      const res = await http.get("/api/admin/min-grade-qpa");
      commit("setMinGradeQpa", res.data);
    } catch (ex) {
      console.log(ex);
    }
  },
  async saveMinGradeQpa({ commit }, gradeQpa) {
    try {
      const res = await http.post("/api/admin/min-grade-qpa", gradeQpa);
      commit("setMinGradeQpa", res.data.data);

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
  async logoutAllBrowserSessions({ commit }) {
    try {
      const res = await http.get("api/admin/browser-sessions/logout/all");
      notify({
        group: "no_button",
        title: "Success",
        max: 1,
        data: {
          type: "success",
          message: res.data.message,
        },
      });
      commit("setBrowserSessions", []);
      localStorage.clear();
      router.push({ name: "Login" });
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status == 422) {
          console.log(ex.response.data);
        }
      }
      console.log(ex.response);
      return false;
    }
  },
  async getAllBrowserSessions({ commit }) {
    try {
      const res = await http.get("api/admin/browser-sessions");
      commit("setBrowserSessions", res.data);
      return true;
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status == 422) {
          console.log(ex.response.data);
        }
      }
      console.log(ex.response);
      return false;
    }
  },
  async updateProfileInfo({ commit }, payload) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(payload);
    try {
      const res = await http.post(
        "api/admin/profile-info/update",
        payload,
        config
      );

      notify({
        group: "no_button",
        title: "Success",
        max: 1,
        data: {
          type: "success",
          message: res.data.message,
        },
      });

      commit("setUserData", res.data.user);
      return true;
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status == 422) {
          console.log(ex.response.data);
        }
      }
      console.log(ex.response);
      return false;
    }
  },
  async changeOwnPassword({ commit }, payload) {
    try {
      const res = await http.post(
        "api/admin/profile-info/change-password",
        payload
      );

      notify({
        group: "no_button",
        title: "Success",
        max: 1,
        data: {
          type: "success",
          message: res.data.message,
        },
      });
      commit("setChangeOwnPasswordError", null);
      return true;
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status == 422) {
          console.log(ex.response.data);
          commit("setChangeOwnPasswordError", ex.response.data);
        }
      }
      console.log(ex.response);
      return false;
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
