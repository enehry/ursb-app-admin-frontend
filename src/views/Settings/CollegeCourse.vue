<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6 mt-8">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-md font-medium leading-6 text-gray-900">
            Colleges & Courses
          </h3>
          <p class="mt-1 text-xs text-gray-600">
            This information will be displayed on the admin and the student and
            will serve as a choice on selecting their course.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="college grid lg:grid-cols-2 gap-4">
          <div class="min-h shadow bg-white rounded-md pb-10 p-4">
            <div class="flex justify-between">
              <div class="inline">
                <h3 class="font-medium text-secondary text-md">Colleges</h3>
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
          <div class="min-h shadow bg-white rounded-md pb-10 p-4">
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
            <div class="block mt-4">
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
      </div>
    </div>
  </div>
  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
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
