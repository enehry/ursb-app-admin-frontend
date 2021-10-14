const state = {
  dashboardCounter: [
    { title: "Total Downloads", count: 527, icon: "DownloadIcon" },
    { title: "Registered Student", count: 1209, icon: "UserGroupIcon" },
    { title: "Total Post", count: 20, icon: "ClipboardListIcon" },
    { title: "Admins", count: 5, icon: "UserIcon" },
  ],
};
const getters = {
  counters: (state) => state.dashboardCounter,
};
const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
