<template>
  <div class="college grid lg:grid-cols-2 mt-4 gap-4">
    <div class="min-h bg-white rounded-md pb-10 p-4">
      <div class="flex justify-between">
        <div class="inline">
          <h3 class="font-bold text-secondary text-md">Colleges</h3>
          <p class="text-xs text-primary">
            Manage courses. Click to view courses under the college
          </p>
        </div>
        <dialog-college>
          <div
            class="
              flex
              justify-center
              items-center
              w-7
              h-7
              bg-secondary
              rounded-full
            "
          >
            <plus-icon class="h-5 text-white"></plus-icon>
          </div>
        </dialog-college>
      </div>
      <div class="block mt-4 divide-y">
        <!-- COURSE --->
        <college-item
          v-for="college in collegesAndCourses"
          :key="college.id"
          :college="college"
          @click="select(college)"
        >
        </college-item>
      </div>
    </div>

    <!-- COURSES -->
    <div class="min-h bg-white rounded-md pb-10 p-4">
      <div class="flex justify-between">
        <div class="inline">
          <h3 class="font-bold text-secondary text-md">
            {{ college_name }} > Courses
          </h3>
          <p class="text-xs text-primary">
            Manage courses, edit, delete and add course.
          </p>
        </div>
        <dialog-course>
          <div
            class="
              flex
              justify-center
              items-center
              w-7
              h-7
              bg-secondary
              rounded-full
            "
          >
            <plus-icon class="h-5 text-white"></plus-icon>
          </div>
        </dialog-course>
      </div>
      <div class="block mt-4 divide-y">
        <!-- COURSE --->
        <course-item
          v-for="course in courses"
          :key="course.id"
          :course="course"
        >
        </course-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DialogCollege from "./DialogCollege.vue";
import DialogCourse from "./DialogCourse.vue";
import { PlusIcon } from "@heroicons/vue/solid";
import CollegeItem from "./CollegeItem.vue";
import CourseItem from "./CourseItem.vue";
export default {
  components: {
    PlusIcon,
    CollegeItem,
    DialogCollege,
    DialogCourse,
    CourseItem,
  },

  async created() {
    await this.getCollegesAndCourses();
  },
  computed: {
    ...mapGetters(["collegesAndCourses", "courses", "college_name"]),
  },

  methods: {
    ...mapActions(["getCollegesAndCourses", "selectCollegeForCourses"]),
    select(college) {
      this.selectCollegeForCourses(college);
    },
  },
};
</script>

<style scoped>
.min-h {
  min-height: 9rem;
}
</style>
