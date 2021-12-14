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
      <archive-icon
        class="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer"
      ></archive-icon>
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
        name="search"
        id="search"
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

    <div class="relative">
      <button
        @click="showMenu"
        class="
          flex
          relative
          hover:text-green-500
          z-10
          rounded-md
          bg-white
          p-2
          focus:outline-none
          text-gray-500
        "
      >
        <filter-icon class="w-4 h-4"></filter-icon>
        <span class="uppercase text-xs font-medium">Filter</span>
      </button>

      <div
        v-show="isMenuShow"
        @click="showMenu"
        class="fixed inset-0 h-full w-full z-10"
      ></div>

      <div
        v-show="isMenuShow"
        class="
          absolute
          right-0
          mt-2
          py-2
          w-40
          bg-white
          rounded-md
          shadow-xl
          z-20
        "
      >
        <div
          v-for="college in collegesAndCourses"
          :key="college.id"
          class="block"
        >
          <button
            href="#"
            class="
              flex
              gap-2
              px-4
              py-2
              text-xs
              font-bold
              capitalize
              text-gray-500
              w-full
              hover:bg-green-500 hover:text-white
            "
          >
            {{ college.abbr }}
          </button>
          <hr class="mx-2" />
          <div v-if="college.course">
            <button
              v-for="course in college.course"
              :key="course.id"
              href="#"
              class="
                flex
                gap-2
                px-6
                py-2
                text-xs
                font-bold
                capitalize
                text-gray-500
                w-full
                hover:bg-green-500 hover:text-white
              "
            >
              {{ course.abbr }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterIcon, ArchiveIcon, UserCircleIcon } from "@heroicons/vue/solid";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  components: {
    FilterIcon,
    ArchiveIcon,
    UserCircleIcon,
  },
  data() {
    return {
      isMenuShow: false,
    };
  },
  async created() {
    await this.getCollegesAndCourses();
    console.log(this.collegesAndCourses);
  },
  computed: {
    ...mapGetters(["collegesAndCourses"]),
  },
  methods: {
    ...mapActions(["getCollegesAndCourses"]),
    showMenu() {
      this.isMenuShow = !this.isMenuShow;
    },
  },
};
</script>

<style></style>
