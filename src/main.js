import { h, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import Notifications from "@kyvg/vue3-notification";
import AdminModal from "./components/AdminModal";

import "jquery/dist/jquery.min.js";
// // //Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "./main.css";

import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

export const app = createApp({
  render() {
    return h(App);
  },
});

app.use(store);
app.use(router);
app.use(VeeValidatePlugin);
app.use(Notifications);
app.component("AdminModal", AdminModal);

app.component("infinite-loading", InfiniteLoading);

app.mount("#app");
