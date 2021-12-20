<template>
  <div
    class="
      flex
      max-w-xl
      my-2
      bg-white
      shadow-md
      rounded-lg
      overflow-hidden
      mx-auto
    "
  >
    <div class="flex items-center w-full">
      <div class="w-full">
        <div class="flex flex-row mt-2 px-2 py-3 mx-3">
          <div class="w-auto h-auto rounded-full border-2 border-gray-200">
            <img
              v-if="post.posted_by.avatar"
              class="w-12 h-12 rounded-full object-cover"
              :src="$baseURL + post.posted_by.avatar"
              :alt="post.posted_by.fame + post.posted_by.lname"
            />
            <img
              v-else
              class="w-12 h-12 rounded-full object-cover"
              :src="`https://avatars.dicebear.com/api/initials/${post.posted_by.fname}.svg?background=%23bcbcbc`"
              :alt="post.posted_by.fame + post.posted_by.lname"
            />
          </div>
          <div class="flex flex-col mb-2 ml-4 mt-1">
            <div class="text-gray-600 text-sm font-semibold">
              {{ post.posted_by.fname }} {{ post.posted_by.lname }}
            </div>
            <div class="flex w-full mt-1">
              <div
                class="
                  text-blue-700
                  uppercase
                  font-base
                  text-xs
                  mr-1
                  cursor-pointer
                "
              >
                {{ post.posted_by.role }}
              </div>
              <div class="text-gray-400 font-light text-xs">
                • {{ timePosted(post.created_at) }}
              </div>
            </div>
          </div>
          <div class=""></div>
          <div class="relative ml-auto">
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
                class="w-3 h-3 text-gray-800 hover:text-green-500"
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
        <div class="border-b border-gray-100"></div>
        <div
          v-if="post.images.length > 0"
          class="
            text-gray-400
            font-medium
            text-sm
            mb-7
            mt-6
            mx-3
            px-2
            object-cover
          "
        >
          <img class="rounded" :src="$baseURL + post.images[0].image_url" />
        </div>
        <div class="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
          {{ post.title }}
        </div>
        <div class="text-gray-500 font-light text-sm mb-6 mx-3 px-2">
          {{ post.body }}
        </div>
        <div class="flex justify-start mb-4 border-t border-gray-100">
          <div class="flex w-full mt-1 pt-2 pl-5">
            <span
              class="
                bg-white
                transition
                ease-out
                duration-300
                hover:text-red-500
                border
                w-8
                h-8
                p-1
                text-center
                rounded-full
                text-gray-400
                cursor-pointer
                mr-2
              "
            >
              <heart-icon class="w-full h-full"></heart-icon>
            </span>
            <img
              class="
                inline-block
                object-cover
                w-8
                h-8
                text-white
                border-2 border-white
                rounded-full
                shadow-sm
                cursor-pointer
              "
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="
                inline-block
                object-cover
                w-8
                h-8
                -ml-2
                text-white
                border-2 border-white
                rounded-full
                shadow-sm
                cursor-pointer
              "
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="
                inline-block
                object-cover
                w-8
                h-8
                -ml-2
                text-white
                border-2 border-white
                rounded-full
                shadow-sm
                cursor-pointer
              "
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
            <img
              class="
                inline-block
                object-cover
                w-8
                h-8
                -ml-2
                text-white
                border-2 border-white
                rounded-full
                shadow-sm
                cursor-pointer
              "
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <span class="uppercase text-xs font-light">+12</span>
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
  HeartIcon,
} from "@heroicons/vue/solid";

import timeAgo from "../../includes/timeAgo";

export default {
  components: {
    DotsVerticalIcon,
    PencilAltIcon,
    TrashIcon,
    ArchiveIcon,
    HeartIcon,
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
