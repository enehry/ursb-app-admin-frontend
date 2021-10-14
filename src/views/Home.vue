<template>
  <div class="home">Dashboard/Admin</div>
  <admin-counter></admin-counter>
</template>

<script>
import AdminCounter from "@/components/AdminCounter.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    AdminCounter,
  },
  computed: {
    ...mapGetters(["dashboardCounter"]),
  },
};
</script>
