<template>
  <Header
    title="Organizations"
    description="Create, edit, and manage organizations information."
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

    <div class="flex w-full gap-2 items-center justify-end">
      <div
        class="actions flex gap-2 items-center content-center justify-center"
      >
        <trash></trash>
        <button
          class="
            flex
            justify-center
            items-center
            bg-secondary
            rounded-md
            shadow-md
            hover:bg-green-600
            px-3
            py-1
            uppercase
            font-medium
          "
        >
          <plus-icon class="h-4 w-4 mr-1 text-white"></plus-icon>
          <span class="text-white text-xs">New</span>
        </button>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
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
                  FB page
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
                  DESCRIPTION
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
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4">
                  <div class="flex flex-row">
                    <div class="h-10 w-20">
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
                        Programmers Society
                      </h1>
                      <h2 class="text-sm text-gray-500">John Doe</h2>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-blue-500">
                    <span>Facebook.com</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace text-sm text-gray-500">
                  <span class=""
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur, mollitia quaerat. Suscipit tempore cum iusto
                    pariatur sit reiciendis fugit eveniet unde ut, aut,
                    perferendis tenetur eius, dicta veritatis exercitationem
                    incidunt!</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span class="text-green-500">EDIT | DELETE</span>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4">
                  <div class="flex flex-row">
                    <div class="h-10 w-20">
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
                        Programmers Society
                      </h1>
                      <h2 class="text-sm text-gray-500">John Doe</h2>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-blue-500">
                    <span>Facebook.com</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace text-sm text-gray-500">
                  <span class=""
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur, mollitia quaerat. Suscipit tempore cum iusto
                    pariatur sit reiciendis fugit eveniet unde ut, aut,
                    perferendis tenetur eius, dicta veritatis exercitationem
                    incidunt!</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span class="text-green-500">EDIT | DELETE</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { SearchIcon, PlusIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Header,
    PlusIcon,
    SearchIcon,
  },
};
</script>

<style></style>
