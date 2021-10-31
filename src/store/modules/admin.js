import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";
const state = {
  admins: [],
  adminErrors: null,
  adminTrash: [],
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
  adminTrash: (state) => state.adminTrash,
  filterAdmins:
    (state) =>
    (filter = "") => {
      let test = state.admins.filter((admin) =>
        admin.fname.toLowerCase().includes(filter.toLowerCase())
      );
      console.log(filter);
      return test;
    },
};
const mutations = {
  setAdminErrors(state, values) {
    state.adminErrors = values;
  },
  setAdmins(state, values) {
    state.admins = values;
  },
  adminToTrash(state, admin) {
    const i = state.admins.map((item) => item.id).indexOf(admin.id);
    state.admins.splice(i, 1);
    state.adminTrash.push(admin);
  },
  setRestoredAdmin(state, admin) {
    const i = state.adminTrash.map((item) => item.id).indexOf(admin.id);
    state.adminTrash.splice(i, 1);
    state.admins.push(admin);
  },
  setTrash(state, trash) {
    state.adminTrash = trash;
  },
};
const actions = {
  async getAllAdmins({ commit }) {
    try {
      const res = await http.get("api/admin/all");
      commit("setAdmins", res.data.admins);
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async getAdminTrash({ commit }) {
    try {
      const res = await http.get("api/admin/trash/all");
      commit("setTrash", res.data.adminTrash);
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async restoreAdmin({ commit }, admin) {
    console.log(admin);
    try {
      const res = await http.get(`api/admin/restore/${admin.id}`);
      commit("setRestoredAdmin", admin);
      notify({
        group: "admin-delete",
        title: res.data.message,
        max: 1,
        data: {
          type: "success",
        },
      });
    } catch (ex) {
      console.log(ex.response);
    }
  },
  async adminMoveToTrash({ commit, dispatch }, admin) {
    try {
      const res = await http.get(`api/admin/delete/${admin.id}`);
      commit("adminToTrash", admin);
      notify({
        group: "admin-delete",
        title: res.data.message,
        max: 1,
        data: {
          message: "Click undo if you want to restore admin",
          type: "trash",
          toggle: () => {
            dispatch("restoreAdmin", admin);
          },
        },
      });
    } catch (ex) {
      console.log(ex.response);
    }
  },
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
  async deleteAdmin({ state }, id) {
    try {
      const res = await http.delete(`api/admin/force-delete/${id}`);
      const i = state.adminTrash.map((item) => item.id).indexOf(id);
      state.adminTrash.splice(i, 1);
      notify({
        group: "admin",
        title: "Admin Deleted",
        text: res.data.message,
        type: "success",
      });

      return true;
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
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
