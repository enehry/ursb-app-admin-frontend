<template>
  <notifications
    class="md:mt-20"
    group="auth"
    position="top center"
    :duration="3000"
    :width="500"
    animation-name="v-fade-top"
  ></notifications>
  <popup-notification></popup-notification>
  <notification-with-button></notification-with-button>
  <router-view></router-view>
</template>
<script>
import { mapActions } from "vuex";
import NotificationWithButton from "./components/Notification_With_Button.vue";
import PopupNotification from "./components/Popup_Notification.vue";
export default {
  components: {
    NotificationWithButton,
    PopupNotification,
  },
  name: "App",
  async created() {
    await this.initializeUserData();
  },
  computed: {},
  methods: {
    ...mapActions(["initializeUserData"]),
  },
};
</script>
<style>
.v-fade-top-enter,
.v-fade-top-leave-to {
  opacity: 0;
  transform: translateY(-500px) scale(0.2);
}
</style>
