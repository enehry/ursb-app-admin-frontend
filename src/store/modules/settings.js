import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";

const state = {
  updateUserData: null,
  changeOwnPasswordError: null,
};
const getters = {
  updateUserData: (state) => state.updateUserData,
  changeOwnPasswordError: (state) => state.changeOwnPasswordError,
};
const mutations = {
  setUpdateUserData(state, user) {
    state.updateUserData = user;
  },
  setChangeOwnPasswordError(state, error) {
    state.changeOwnPasswordError = error;
  },
};
const actions = {
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
    console.log(payload);
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
