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
      const res = await http.get(`api/admin/post?page=${state.page}`);
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
