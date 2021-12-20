<template>
  <Header title="Settings" description="Manage System Options" />
  <college-course v-if="role === 'admin'"></college-course>

  <personal-info></personal-info>
  <div class="mt-4"></div>
  <change-password></change-password>
  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
  <deans-list v-if="role === 'admin'"></deans-list>

  <browser-sessions></browser-sessions>
  <div class="float-right">
    <button
      @click="logout"
      class="
        font-medium
        text-xs
        bg-gray-800
        px-4
        py-2
        text-white
        rounded-full
        hover:bg-gray-600
        shadow-md
      "
    >
      Logout
    </button>
  </div>
  <div class="h-20"></div>
</template>

<script>
import CollegeCourse from "./CollegeCourse.vue";
import PersonalInfo from "./PersonalInfo.vue";
import DeansList from "./DeansListSettings.vue";
import ChangePassword from "./ChangePassword.vue";
import Header from "../../components/Header.vue";
import BrowserSessions from "./BrowserSessions.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CollegeCourse,
    PersonalInfo,
    DeansList,
    ChangePassword,
    Header,
    BrowserSessions,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["role"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped></style>
