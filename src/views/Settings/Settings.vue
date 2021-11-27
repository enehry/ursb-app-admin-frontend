<template>
  <div>Settings/Admin</div>
  <college-course></college-course>
  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
  <personal-info></personal-info>
  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
  <div class="float-right">
    <button
      @click="logout"
      class="
        font-bold
        text-xs
        uppercase
        bg-secondary
        px-3
        py-3
        text-white
        rounded-md
        hover:bg-tertiary
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
import { mapActions } from "vuex";
export default {
  components: {
    CollegeCourse,
    PersonalInfo,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped></style>
