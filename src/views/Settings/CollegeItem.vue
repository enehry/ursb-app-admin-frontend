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
      <h1 class="text-sm font-bold flex items-center text-secondary">
        <chevron-right-icon
          class="h-5 w-5 mr-1 rounded-full text-white"
          :class="collegeColor"
        ></chevron-right-icon>
        {{ college.abbr }}
      </h1>
      <h2 class="text-xs text-primary ml-6">{{ college.name }}</h2>
    </div>
    <div class="flex gap-2">
      <button @click.prevent="toggleDelete(college.id)" class="h-5">
        <trash-icon class="h-full text-primary hover:text-red-500"></trash-icon>
      </button>
      <dialog-college :college="college">
        <div class="h-5 w-5">
          <pencil-icon
            class="h-full text-primary hover:text-blue-500"
          ></pencil-icon>
        </div>
      </dialog-college>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DialogCollege from "./DialogCollege.vue";
import { ChevronRightIcon, TrashIcon, PencilIcon } from "@heroicons/vue/solid";
export default {
  name: "CollegeItem",
  props: {
    college: Object,
  },
  components: {
    ChevronRightIcon,
    TrashIcon,
    PencilIcon,
    DialogCollege,
  },
  computed: {
    collegeColor() {
      return `bg-${this.college.color}-500`;
    },
  },
  methods: {
    ...mapActions(["deleteCollege"]),
    toggleDelete(id) {
      this.deleteCollege(id);
    },
  },
};
</script>

<style></style>
