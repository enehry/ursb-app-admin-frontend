<template>
  <notifications
    class="md:mt-20"
    group="auth"
    position="top center"
    :duration="3000"
    :width="500"
    animation-name="v-fade-top"
  />
  <router-view></router-view>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  created() {
    this.initializeUserData();
  },
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
