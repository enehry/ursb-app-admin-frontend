import { h, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import Notifications from "@kyvg/vue3-notification";

import "./main.css";

export const app = createApp({
  render() {
    return h(App);
  },
});

app.use(store);
app.use(router);
app.use(VeeValidatePlugin);
app.use(Notifications);

app.mount("#app");
