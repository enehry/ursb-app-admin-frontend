import { createStore } from "vuex";
import auth from "./modules/auth.js";
import dashboard from "./modules/dashboard.js";
import collegeCourse from "./modules/collegeCourse";
import admin from "./modules/admin";
import students from "./modules/students";
import bulletinBoard from "./modules/bulletingBoard";

export default createStore({
  modules: {
    auth,
    dashboard,
    collegeCourse,
    admin,
    students,
    bulletinBoard,
  },
});
