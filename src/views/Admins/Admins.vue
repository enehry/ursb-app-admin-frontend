<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
      <h2 class="text-md font-bold uppercase text-gray-600">Admins</h2>
      <h6 class="text-sm text-gray-400">
        Manage admins. You can register, view and delete admins on this page.
      </h6>
    </div>
    <div class="block lg:flex content-center items-center w-full mb-5">
      <div class="mb-2 pt-2 flex content-center items-center text-gray-600">
        <input
          class="
            border-2 border-gray-300
            bg-white
            px-5
            pr-8
            w-full
            lg:w-80
            h-10
            rounded-lg
            text-xs
            hover:border-green-600
            focus:outline-none focus:border-green-600
          "
          type="search"
          name="search"
          placeholder="Search"
          v-model="keyword"
        />
        <button type="submit" class="w-5 h-5 -ml-7 mr-4">
          <search-icon></search-icon>
        </button>
      </div>
      <div class="flex w-full gap-2 items-center justify-between">
        <select v-model="filter" class="px-2 py-2 border rounded-md text-xs">
          <option value="" selected disabled>Sort by</option>
          <option value="desc">Older first</option>
          <option value="asc">Newest first</option>
          <option value="col">College</option>
        </select>
        <div
          v-if="position.toLowerCase() === 'admin'"
          class="actions flex gap-2 items-center content-center justify-center"
        >
          <trash></trash>
          <router-link
            :to="{ name: 'CreateAdmin' }"
            class="
              flex
              justify-center
              items-center
              bg-secondary
              rounded-md
              hover:bg-green-600
              px-2
              py-1
            "
          >
            <plus-icon class="h-3 text-white"></plus-icon>
            <span class="text-white text-xs">New</span>
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      <div
        v-for="admin in searchResult"
        :key="admin.id"
        class="
          w-full
          bg-white
          rounded-md
          shadow-md
          flex flex-col
          justify-center
          items-center
          p-4
        "
      >
        <div
          v-if="position.toLowerCase() === 'admin'"
          class="flex w-full justify-end"
        >
          <router-link :to="{ name: 'EditAdmin', params: { id: admin.id } }">
            <pencil-icon
              class="w-5 h-5 text-gray-500 hover:text-blue-500"
            ></pencil-icon>
          </router-link>
          <button @click="remove(admin)">
            <trash-icon
              class="w-5 h-5 text-gray-500 hover:text-red-500"
            ></trash-icon>
          </button>
        </div>
        <div class="body p-6">
          <div class="mb-8 w-full flex justify-center">
            <img
              v-if="admin.avatar"
              class="ring-4 object-center object-cover rounded-full h-28 w-28"
              :class="ringColor(admin.college.color)"
              :src="`http://127.0.0.1:8000${admin.avatar}`"
            />
            <img
              v-else
              class="ring-4 object-center object-cover rounded-full h-28 w-28"
              :class="ringColor(admin.college.color)"
              :src="`https://avatars.dicebear.com/api/initials/${admin.fname}.svg?background=%23bcbcbc`"
              alt=""
            />
          </div>
          <div class="text-center">
            <p class="text-md text-gray-600 font-bold mb-2">
              {{ `${admin.fname}  ${admin.lname}` }}
            </p>
            <p class="text-sm uppercase text-gray-500 font-normal">
              {{ admin.position }}
            </p>
            <div class="flex w-full mt-2 justify-center">
              <p
                class="
                  text-sm
                  px-2
                  py-1
                  rounded-lg
                  w-min
                  text-white
                  font-normal
                "
                :class="bgColor(admin.college.color)"
              >
                {{ admin.college.abbr }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Trash from "./Trash.vue";
import {
  SearchIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/vue/solid";

export default {
  components: {
    SearchIcon,
    PlusIcon,
    PencilIcon,
    TrashIcon,
    Trash,
  },
  async created() {
    await this.getAllAdmins();
    this.searched = this.admins;
  },
  data() {
    return {
      keyword: "",
      filter: "",
      searched: [],
    };
  },
  computed: {
    ...mapGetters(["admins", "position"]),
    searchResult() {
      let admins = this.searched;

      if (this.keyword != "" && this.keyword) {
        admins = admins.filter((item) => {
          return item.fname.toUpperCase().includes(this.keyword.toUpperCase());
        });
      }

      if (this.filter === "asc") {
        admins = admins.sort((a, b) =>
          a.id < b.id ? 1 : b.id < a.id ? -1 : 0
        );
      } else if (this.filter === "desc") {
        admins = admins.sort((a, b) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
      } else if (this.filter === "col") {
        admins = admins.sort((a, b) =>
          a.college.abbr.localeCompare(b.college.abbr)
        );
      }

      return admins;
    },
  },
  methods: {
    ...mapActions(["getAllAdmins", "adminMoveToTrash"]),
    ringColor: (color) => `ring-${color}-400`,
    bgColor: (color) => `bg-${color}-500`,

    remove(admin) {
      this.adminMoveToTrash(admin);
    },
  },
};
</script>

<style scoped></style>
