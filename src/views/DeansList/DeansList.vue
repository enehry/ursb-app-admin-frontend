<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
    <Header
      title="Dean's List"
      description="Verify student file for applying deans list"
    />
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
        <div class="flex flex-row gap-1">
          <select v-model="filter" class="px-2 py-2 border rounded-md text-xs">
            <option value="" selected disabled>Sort by</option>
            <option value="desc">Older first</option>
            <option value="asc">Newest first</option>
            <option value="asc">QPA</option>
          </select>
          <select v-model="college" class="px-2 py-2 border rounded-md text-xs">
            <option value="" selected disabled>Course</option>
            <option value="desc">All</option>
            <option value="asc">BSIT</option>
            <option value="asc">BSIT</option>
          </select>
        </div>

        <!-- switch -->
        <div class="">
          <div class="w-full h-full flex flex-row justify-center items-center">
            <div class="">
              <p class="text-xs text-gray-500">
                Open the application for dean's list
              </p>
            </div>
            <div class="flex justify-center items-center">
              <!-- Switch Container -->
              <div
                :class="toggleActive ? 'bg-green-500' : 'bg-gray-300'"
                class="w-11 h-6 flex items-center rounded-full mx-3 px-1"
                @click="handleToggleActive"
              >
                <!-- Switch -->
                <div
                  class="
                    bg-white
                    w-4
                    h-4
                    rounded-full
                    shadow-md
                    transform
                    transition
                    duration-15
                  "
                  :class="{ 'translate-x-5': toggleActive }"
                ></div>
              </div>
            </div>
          </div>
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
                    YEAR/SEMESTER
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
                    COURSE
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
                    QPA
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
                    STATUS
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex flex-row">
                      <div class="mr-4">
                        <img
                          class="
                            ring-2 ring-gray-500
                            object-center object-cover
                            rounded-full
                            h-10
                            w-10
                          "
                          src="https://avatars.dicebear.com/api/initials/JohnNehry.svg?background=%23bcbcbc"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col">
                        <h1 class="text-sm font-medium text-gray-900">
                          John Nehry C. Dedoro
                        </h1>
                        <h2 class="text-sm text-gray-500">enehry@gmail.com</h2>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      <span>1st Year - 1st Sem</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="">BSIT</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
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
                      >1.17</span
                    >
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="text-green-500">Approved</span>
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
                    <router-link
                      :to="{ name: 'deans-list-view', params: { id: 1 } }"
                      class="text-indigo-600 hover:text-indigo-900"
                      >View</router-link
                    >
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
import Header from "../../components/Header.vue";
import { SearchIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Header,
    SearchIcon,
  },
  data() {
    return {
      filter: "",
      toggleActive: false,
      keyword: "",
      college: "",
    };
  },
  methods: {
    handleToggleActive() {
      this.toggleActive = !this.toggleActive;
    },
  },
};
</script>

<style></style>
