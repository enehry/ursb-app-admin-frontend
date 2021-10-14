import { createStore } from "vuex";
import auth from "./modules/auth.js";
import dashboard from "./modules/dashboard.js";
import collegeCourse from "./modules/collegeCourse";

export default createStore({
  modules: {
    auth,
    dashboard,
    collegeCourse,
  },
});
