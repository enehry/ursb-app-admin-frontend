<template>
  <div class="w-full lg:flex mb-4">
    <div
      class="
        h-48
        lg:h-auto lg:w-48
        flex-none
        bg-cover
        cover-center
        rounded-t
        lg:rounded-t-none lg:rounded-l
        text-center
        overflow-hidden
        shadow-md
      "
    >
      <img
        class="
          ring-2
          object-center object-cover
          h-full
          w-full
          rounded-t
          lg:rounded-t-none lg:rounded-l
        "
        src="https://via.placeholder.com/150"
      />
    </div>
    <div
      class="
        bg-white
        lg:rounded-r-lg
        shadow-md
        w-full
        p-4
        flex flex-col
        justify-between
        leading-normal
      "
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-sm mb-2">
          {{ post.title }}
        </div>
        <p class="text-gray-700 text-sm">
          {{ post.body }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://dummyimage.com/300"
            alt="Avatar of Writer"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">
              {{ post.admin.fname + " " + post.admin.lname }}
            </p>
            <p class="text-gray-600 text-xs font-light">
              {{ post.admin.position }} -
              <span>{{ timePosted(post.created_at) }}</span>
            </p>
          </div>
        </div>
        <div class="relative">
          <button
            @click="showMenu"
            class="
              relative
              z-10
              block
              rounded-md
              bg-white
              p-2
              focus:outline-none
            "
          >
            <dots-vertical-icon
              class="w-4 h-4 text-gray-800 hover:text-green-500"
            ></dots-vertical-icon>
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
            <button
              href="#"
              class="
                flex
                gap-2
                px-4
                py-2
                text-xs
                capitalize
                text-gray-500
                w-full
                hover:bg-green-500 hover:text-white
              "
            >
              <pencil-alt-icon
                class="w-4 h-4 hover:text-white"
              ></pencil-alt-icon>
              Edit
            </button>
            <button
              href="#"
              class="
                flex
                gap-2
                px-4
                py-2
                text-xs
                capitalize
                text-gray-500
                w-full
                hover:bg-green-500 hover:text-white
              "
            >
              <archive-icon class="w-4 h-4 hover:text-white"></archive-icon>
              Archive
            </button>
            <button
              href="#"
              class="
                flex
                gap-2
                px-4
                py-2
                text-xs
                capitalize
                text-gray-500
                w-full
                hover:bg-green-500 hover:text-white
              "
            >
              <trash-icon class="w-4 h-4 hover:text-white"></trash-icon>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
  ArchiveIcon,
} from "@heroicons/vue/solid";

import timeAgo from "../../includes/timeAgo";

export default {
  components: {
    DotsVerticalIcon,
    PencilAltIcon,
    TrashIcon,
    ArchiveIcon,
  },
  created() {},
  props: {
    post: Object,
  },
  data() {
    return {
      isMenuShow: false,
    };
  },
  computed: {},
  methods: {
    showMenu() {
      this.isMenuShow = !this.isMenuShow;
      console.log("click");
    },
    timePosted(date) {
      // Create formatter (English).
      var temp = new Date(date);
      return timeAgo.format(temp, "round");
    },
  },
};
</script>

<style></style>
