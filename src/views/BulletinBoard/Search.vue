<template>
  <div class="max-w-xl mx-auto mb-2">
    <div class="sm:px-0 px-8">
      <h1 class="bulletin-board uppercase text-gray-700 text-sm font-bold">
        Bulletin Board
      </h1>
      <h2 class="text-gray-400 text-xs mb-8">
        Posting announcements here will reflect to the student mobile app
        depending to their course.
      </h2>
    </div>

    <div class="w-full flex justify-end px-4 gap-1">
      <user-circle-icon
        class="w-6 h-6 text-gray-400 hover:text-green-500 cursor-pointer"
      ></user-circle-icon>
      <archive-post></archive-post>
    </div>
  </div>
  <div
    class="
      flex
      items-center
      justify-end
      heading
      h-10
      bg-white
      mb-3
      shadow-md
      rounded-md
      px-4
      max-w-xl
      mx-auto
    "
  >
    <div
      class="
        w-full
        h-7
        pl-3
        pr-2
        bg-white
        border
        rounded-lg
        flex
        justify-between
        items-center
        relative
      "
    >
      <input
        type="search"
        v-model="filter.search"
        placeholder="Search"
        class="
          appearance-none
          w-full
          text-sm
          outline-none
          focus:outline-none
          active:outline-none
        "
      />
      <button
        @click="filterPosts"
        type="submit"
        class="ml-1 outline-none focus:outline-none active:outline-none"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-4 h-4"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>

    <div class="ml-2 flex items-center text-gray-500 gap-1">
      <filter-icon class="w-4 h-4"></filter-icon>
      <span class="text-xs font-medium">Course:</span>
      <select
        class="text-xs px-1 border rounded-md focus:border-gray-400"
        v-model="filter.course"
        @change="filterPosts"
      >
        <option value="">All</option>
        <option
          v-for="course in coursesForPosting"
          :key="course.id"
          :value="course.id"
        >
          {{ course.abbr }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { FilterIcon, UserCircleIcon } from "@heroicons/vue/solid";
import ArchivePost from "./ArchivePost.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  components: {
    FilterIcon,

    UserCircleIcon,
    ArchivePost,
  },
  data() {
    return {
      filter: {
        course: "",
        search: "",
      },
    };
  },
  async created() {},
  computed: {
    ...mapGetters(["coursesForPosting"]),
  },
  methods: {
    ...mapActions(["filterResult"]),
    showMenu() {
      this.isMenuShow = !this.isMenuShow;
    },
    filterPosts() {
      this.filterResult(this.filter);
    },
  },
};
</script>

<style></style>
