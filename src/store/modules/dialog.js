const state = {
  isToggle: false,
};
const getters = {
  isToggle: (state) => state.isToggle,
};
const actions = {};

const mutations = {
  toggle(state) {
    state.isToggle = !state.isToggle;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
