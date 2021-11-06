import http from "@/includes/http.js";

const state = {
  posts: [],
  page: 1,
};
const getters = {
  posts: (state) => state.posts,
};
const actions = {
  async getPosts({ commit, state }) {
    try {
      const res = await http.get(`api/admin/posts/all?page=${state.page}`);
      if (res.data.data.length <= 0) {
        return "empty";
      }
      commit("setPosts", res.data.data);
      state.page++;
    } catch (ex) {
      console.log(ex.response);

      return "error";
    }
  },
};

const mutations = {
  setPosts(state, values) {
    state.posts = state.posts.concat(values);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
