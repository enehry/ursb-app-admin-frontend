<template>
  <div
    class="
      flex
      items-center
      content-center
      cursor-pointer
      justify-between
      py-4
      px-4
      hover:shadow-md
    "
  >
    <div class="block">
      <h1 class="text-sm font-bold flex text-secondary">
        <chevron-right-icon class="h-5 w-5 text-secondary"></chevron-right-icon>
        {{ course.abbr }}
      </h1>
      <h2 class="text-xs text-primary ml-5">{{ course.name }}</h2>
    </div>
    <div class="flex gap-2">
      <button @click.prevent="toggleDelete(course.id)" class="h-5">
        <trash-icon class="h-full text-primary hover:text-red-500"></trash-icon>
      </button>
      <dialog-course :course="course">
        <div class="h-5 w-5">
          <pencil-icon
            class="h-full text-primary hover:text-blue-500"
          ></pencil-icon>
        </div>
      </dialog-course>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DialogCourse from "./DialogCourse.vue";
import { ChevronRightIcon, TrashIcon, PencilIcon } from "@heroicons/vue/solid";
export default {
  name: "CollegeItem",
  props: {
    course: Object,
  },

  components: {
    ChevronRightIcon,
    TrashIcon,
    PencilIcon,
    DialogCourse,
  },
  methods: {
    ...mapActions(["deleteCourse"]),
    toggleDelete(id) {
      this.deleteCourse(id);
    },
  },
};
</script>

<style></style>
