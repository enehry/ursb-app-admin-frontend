<template>
  <div class="e-prospectus uppercase text-sm font-bold mb-4">e-Prospectus</div>

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
                  College/Course
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
                  Program Head
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
                  UNITS
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="prospectus in coursesProspectus" :key="prospectus.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <document-text-icon
                        class="h-10 w-10 rounded-full"
                      ></document-text-icon>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ prospectus.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ prospectus.college.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div v-if="prospectus.admin" class="text-sm text-gray-900">
                    {{
                      prospectus.admin.fname +
                      " " +
                      prospectus.admin.mname +
                      " " +
                      prospectus.admin.lname
                    }}
                  </div>
                  <div v-else class="text-sm text-gray-900">NONE</div>
                  <div class="text-sm text-gray-500">{{ prospectus.abbr }}</div>
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
                  >
                    {{ sumUpUnits(prospectus.prospectus) }}
                  </span>
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
                    :to="{
                      name: 'CreateEProspectus',
                      params: {
                        id: prospectus.id,
                        name: prospectus.name,
                      },
                    }"
                  >
                    <a class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </router-link>
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
import { DocumentTextIcon } from "@heroicons/vue/solid";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DocumentTextIcon,
  },
  async created() {
    await this.getAllCoursesProspectusByUser();
    console.log(this.coursesProspectus);
  },
  computed: {
    ...mapGetters(["coursesProspectus"]),
  },
  methods: {
    ...mapActions(["getAllCoursesProspectusByUser"]),
    sumUpUnits(prospectus) {
      let sum = 0;

      prospectus.forEach((prospect) => {
        sum += prospect.unit;
      });
      return sum;
    },
    convertToJson(prospectus) {
      return JSON.stringify(prospectus);
    },
  },
};
</script>

<style></style>
