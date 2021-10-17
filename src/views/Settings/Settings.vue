<template>
  <div>Settings/Admin</div>
  <college-course></college-course>
  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
  <personal-info></personal-info>
</template>

<script>
import CollegeCourse from "./CollegeCourse.vue";
import PersonalInfo from "./PersonalInfo.vue";
export default {
  components: {
    CollegeCourse,
    PersonalInfo,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
