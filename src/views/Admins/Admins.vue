<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
    <div class="pb-12">
      <h2 class="text-sm font-bold uppercase text-gray-700">Admins</h2>
      <h6 class="text-xs text-gray-400">
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
          v-if="role.toLowerCase() === 'admin'"
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
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                      text-center
                    "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Created
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="admin in searchResult" :key="admin.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          v-if="admin.avatar"
                          class="
                            ring-2
                            object-center object-cover
                            rounded-full
                            h-10
                            w-10
                          "
                          :class="ringColor(admin.college.color)"
                          :src="`${this.$baseURL + admin.avatar}`"
                        />
                        <img
                          v-else
                          class="
                            ring-2
                            object-center object-cover
                            rounded-full
                            h-10
                            w-10
                          "
                          :class="ringColor(admin.college.color)"
                          :src="`https://avatars.dicebear.com/api/initials/${admin.fname}.svg?background=%23bcbcbc`"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ admin.fname }} {{ admin.lname }}
                        </div>
                        <div class="text-xs text-gray-500">
                          {{ admin.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm uppercase font-medium text-gray-900">
                      {{ admin.role }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ admin.college.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      v-if="admin.email_verified_at"
                      class="
                        px-2
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        rounded-full
                        bg-green-100
                        text-green-800
                      "
                    >
                      Verified
                    </span>
                    <span
                      v-else
                      class="
                        px-2
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        rounded-full
                        bg-yellow-100
                        text-yellow-800
                      "
                    >
                      Unverified
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    {{ createdDate(admin.created_at) }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-right text-sm
                      font-medium
                    "
                  >
                    <div
                      v-if="role.toLowerCase() === 'admin'"
                      class="flex w-full justify-end"
                    >
                      <router-link
                        :to="{ name: 'EditAdmin', params: { id: admin.id } }"
                      >
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Trash from "./Trash.vue";
import timeAgo from "../../includes/timeAgo";
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
    ...mapGetters(["admins", "role"]),
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
    createdDate(date) {
      // Create formatter (English).
      var temp = new Date(date);
      return timeAgo.format(temp, "round");
    },
    remove(admin) {
      this.adminMoveToTrash(admin);
    },
  },
};
</script>

<style scoped></style>
