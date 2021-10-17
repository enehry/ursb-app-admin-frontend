import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";
const state = {
  admins: [],
  adminErrors: null,
};
const getters = {
  admins: (state) => state.admins,
  adminErrors: (state) => state.adminErrors,
  isEmailError: (state) => {
    if (state.adminErrors) {
      if (state.adminErrors.errors.email) {
        return true;
      }
    }
    return false;
  },
};
const mutations = {
  setAdminErrors(state, values) {
    state.adminErrors = values;
  },
};
const actions = {
  async register({ commit }, payload) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(payload);
    try {
      const res = await http.post("api/admin/register", payload, config);
      notify({
        group: "admin",
        title: "College Successfully Added",
        text: res.data.message,
        type: "success",
      });

      return true;
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status == 422) {
          commit("setAdminErrors", ex.response.data);
          console.log(ex.response.data);
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
