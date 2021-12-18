import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";
import router from "@/router/index.js";

const state = {
  token: null,
  userData: null,
  loading: false,
  errors: null,
};

const getters = {
  userData: (state) => state.userData,
  isLogged: (state) => !!state.user,
  isLoading: (state) => state.loading,
  errors: (state) => state.errors,
  fullName: (state) => {
    const user = state.userData;
    return `${user.fname} ${user.mname} ${user.lname}`;
  },
  email: (state) => state.userData.email,
  role: () => state.userData.role,
};

const actions = {
  async login({ commit }, values) {
    commit("setLoading", true);
    try {
      await http.get("/sanctum/csrf-cookie");
      const res = await http.post("api/admin/login", values);
      console.log(res);
      commit("setToken", res.data.token);
      const user = await http.get("api/admin/me");
      commit("setUserData", user.data);
      router.push({ name: "Home" });
    } catch (ex) {
      if (ex.response.status == 422) {
        console.log(ex.response.data);
        commit("setErrors", ex.response.data.errors);
        notify({
          group: "auth",
          title: "Authentication Error",
          text: ex.response.data.errors,
          type: "error",
        });
      }
    }

    commit("setLoading", false);
  },
  async verifyUserCode({ commit }, payload) {
    commit("setLoading", true);
    try {
      await http.post("api/admin/verifyCode", { code: payload });
      localStorage.removeItem("userData");
      // refetch user data
      const user = await http.get("api/admin/me");
      commit("setUserData", user.data.user);
      router.push({ name: "Home" });
    } catch (ex) {
      if (ex.response.status == 422) {
        console.log(ex.response.data);
        commit("setErrors", ex.response.data.errors);
        notify({
          group: "auth",
          title: "Verification Error",
          text: ex.response.data.errors,
          type: "error",
        });
      }
      console.log(ex.response.data);
    }
    commit("setLoading", false);
  },
  initializeUserData({ commit }) {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      commit("setUserData", user);
    }
  },
  async logout({ commit }) {
    try {
      const res = await http.get("api/admin/logout");
      if (res.data.success) {
        commit("clearUserData");
      }
    } catch (ex) {
      if (ex.response.status == 422) {
        console.log(ex.response.data);
        commit("setErrors", ex.response.data.errors);
        notify({
          group: "auth",
          title: "Log Out Error",
          text: ex.response.data.errors,
          type: "error",
        });
      }
      console.log(ex.response.data);
    }
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
    http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  setLoading(state, value) {
    state.loading = value;
  },

  setUserData(state, userData) {
    state.userData = userData;
    localStorage.setItem("userData", JSON.stringify(userData));
    this.$user = userData;
  },

  setErrors(state, value) {
    state.errors = value;
  },

  clearUserData() {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    location.reload();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
