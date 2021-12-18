<template>
  <Header
    title="Dashboard"
    description="Summary of all the features of the app"
  ></Header>
  <admin-counter></admin-counter>
  <div class="w-full flex flex-col md:flex-row mt-4">
    <div class="w-full m-1">
      <div class="flex w-full flex-col justify-center h-full">
        <!-- Table -->
        <div
          class="
            w-full
            max-w-2xl
            mx-auto
            bg-white
            border border-gray-200
            rounded-md
            shadow-md
          "
        >
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-medium text-xs text-gray-500">
              Recent Student Who Applied for DL
            </h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead
                  class="
                    text-xs
                    font-semibold
                    uppercase
                    text-gray-400
                    bg-gray-50
                  "
                >
                  <tr>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Name</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Email</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Course</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center">QPA</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            class="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width="40"
                            height="40"
                            alt="Alex Shatov"
                          />
                        </div>
                        <div class="font-medium text-gray-800">Alex Shatov</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left text-xs">alexshatov@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">
                        BSIT
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">1.4</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            class="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div class="font-medium text-gray-800">
                          Philip Harbach
                        </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left text-xs">philip.h@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">
                        BSIS
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">1.2</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            class="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                            width="40"
                            height="40"
                            alt="Mirko Fisuk"
                          />
                        </div>
                        <div class="font-medium text-gray-800">Mirko Fisuk</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left text-xs">mirkofisuk@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">
                        BSIT
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">1.5</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            class="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                            width="40"
                            height="40"
                            alt="Olga Semklo"
                          />
                        </div>
                        <div class="font-medium text-gray-800">Olga Semklo</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left text-xs">olga.s@cool.design</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">
                        BSIT
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">1.2</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            class="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                            width="40"
                            height="40"
                            alt="Burak Long"
                          />
                        </div>
                        <div class="font-medium text-gray-800">Burak Long</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left text-xs">longburak@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">
                        BSIT
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">1</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="flex flex-col m-1">
        <div class="title bg-white rounded-md shadow-md px-5 py-4 mb-2">
          <h1 class="text-gray-500 text-xs font-medium">Most Popular Post</h1>
        </div>
        <div class="bg-white shadow-md rounded-md p-2">
          <div class="flex-none lg:flex">
            <div class="h-full w-full lg:mb-0 mb-3">
              <img
                src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="Just a flower"
                class="
                  w-full
                  object-scale-down
                  lg:object-cover lg:h-44
                  rounded-md
                "
              />
            </div>
            <div class="flex-col justify-between ml-3 py-2">
              <div class="flex flex-wrap mb-2">
                <h2 class="flex-auto text-lg font-medium">John Nehry Dedoro</h2>
                <div class="w-full flex-none text-xs text-gray-400">
                  <span class="text-blue-700">Admin</span> • 22 hours ago
                </div>
              </div>
              <div class="flex border-t border-gray-200">
                <p class="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  assumenda cum, blanditiis aliquid optio, official...
                </p>
              </div>
              <div class="flex justify-between text-sm font-medium mt-4">
                <button class="flex items-center gap-1">
                  <heart-icon class="text-red-500 w-5 h-5"></heart-icon>
                  <p class="text-xs font-light text-gray-500">3k</p>
                </button>
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-gray-900
                    px-5
                    py-2
                    shadow-sm
                    tracking-wider
                    text-white
                    rounded-full
                    text-xs
                    hover:bg-gray-800
                  "
                  type="button"
                  aria-label="like"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminCounter from "@/components/AdminCounter.vue";
import { mapGetters } from "vuex";
import Header from "../components/Header.vue";
import { HeartIcon } from "@heroicons/vue/outline";

export default {
  name: "Home",
  components: {
    AdminCounter,
    Header,
    HeartIcon,
  },
  computed: {
    ...mapGetters(["dashboardCounter"]),
  },
};
</script>
