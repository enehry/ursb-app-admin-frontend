import http from "@/includes/http.js";

const state = {
  posts: [],
};
const getters = {
  posts: (state) => state.posts,
};
const actions = {
  async getPosts({ commit }) {
    try {
      const res = await http.get("api/admin/posts/all");
      commit("setPosts", res.data.posts);
    } catch (ex) {
      console.log(ex.response);
    }
  },
};

const mutations = {
  setPosts(state, values) {
    state.posts = values;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
