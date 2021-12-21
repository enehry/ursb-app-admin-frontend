import http from "@/includes/http.js";
import { notify } from "@kyvg/vue3-notification";

const state = {
  posts: [],
  page: 1,
  coursesForPosting: [],
  archivePosts: [],
  filter: {
    course: "",
    search: "",
  },
};
const getters = {
  posts: (state) => state.posts,
  coursesForPosting: (state) => state.coursesForPosting,
  filter: (state) => state.filter,
  archivePosts: (state) => state.archivePosts,
};
const actions = {
  async getArchivePosts({ commit }) {
    try {
      const response = await http.get("/api/admin/archive-post");
      commit("setArchivePosts", response.data.data);
    } catch (ex) {
      console.log(ex);
    }
  },
  async restorePost({ commit }, post) {
    try {
      const res = await http.post(`api/admin/restore-post/${post.id}`);
      commit("undoPost", post);
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
      return "error";
    }
  },
  async toArchivePost({ commit }, post) {
    try {
      const res = await http.delete(`api/admin/post/${post.id}`);
      commit("archivePost", post);
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
      return "error";
    }
  },
  async deletePost({ commit }, id) {
    try {
      const res = await http.delete(`api/admin/permanent-delete/post/${id}`);
      commit("removePost", id);
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
      return "error";
    }
  },
  async getCoursesForPosting({ commit }) {
    try {
      const res = await http.get("api/admin/get-courses-by-user");
      commit("setCoursesForPosting", res.data);

      return true;
    } catch (ex) {
      console.log(ex.response);

      return "error";
    }
  },
  filterResult({ commit, dispatch, state }, filter) {
    commit("setFilter", filter);
    state.posts = [];
    state.page = 1;
    dispatch("getPosts");
  },

  async getPosts({ commit, state }) {
    try {
      const res = await http.get(
        `api/admin/post?page=${state.page}&search=${state.filter.search}&course=${state.filter.course}`
      );
      if (res.data.data.length <= 0) {
        return "empty";
      }
      console.log(res.data.data);
      commit("setPosts", res.data.data);
      state.page++;
    } catch (ex) {
      console.log(ex.response);

      return "error";
    }
  },
  async createNewPost({ commit }, data) {
    try {
      const res = await http.post("api/admin/post", data);
      commit("addPost", res.data.post);
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
};

const mutations = {
  setPosts(state, values) {
    state.posts = state.posts.concat(values);
  },
  addPost(state, value) {
    state.posts.unshift(value);
  },
  setCoursesForPosting(state, values) {
    state.coursesForPosting = values;
  },
  setFilter(state, values) {
    state.filter = values;
  },
  removePost(state, id) {
    state.posts = state.posts.filter((post) => post.id !== id);
    state.archivePosts = state.archivePosts.filter((post) => post.id !== id);
  },
  archivePost(state, post) {
    const i = state.posts.map((item) => item.id).indexOf(post.id);
    state.posts.splice(i, 1);
    state.archivePosts.push(post);
  },
  setArchivePosts(state, values) {
    state.archivePosts = values;
  },
  undoPost(state, post) {
    state.archivePosts = state.archivePosts.filter(
      (item) => item.id !== post.id
    );
    state.posts.unshift(post);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
