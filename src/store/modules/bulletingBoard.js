import http from "@/includes/http.js";

const state = {
  posts: [],
  page: 1,
  coursesForPosting: [],
  filter: {
    course: "",
    search: "",
  },
};
const getters = {
  posts: (state) => state.posts,
  coursesForPosting: (state) => state.coursesForPosting,
  filter: (state) => state.filter,
};
const actions = {
  async getCoursesForPosting({ commit }) {
    try {
      const res = await http.get("api/admin/get-courses-by-user");
      commit("setCoursesForPosting", res.data);
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
