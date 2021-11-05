<template>
  <div class="heading mb-4 ml-2">
    <div class="student uppercase font-medium">students</div>
    <small class="text-xs font-light"
      >View, ban and permanently delete registered students in the mobile
      app.</small
    >
  </div>

  <div class="container w-full mx-auto px-2">
    <!--Card-->
    <div
      v-show="!loading"
      id="recipients"
      class="overflow-x-auto p-8 mt-6 lg:mt-0 rounded shadow bg-white"
    >
      <table class="table table-auto table-hover table-bordered" id="students">
        <thead>
          <tr class="text-xs font-semibold uppercase text-left">
            <th class="text-left">ID</th>
            <th class="text-center">Avatar</th>
            <th>stud #</th>
            <th>Name</th>
            <th class="text-left">Verified</th>
            <th class="text-center">Course</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="text-xs">
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td class="text-center">
              <div class="flex justify-center">
                <img
                  v-if="student.avatar"
                  class="ring-2 object-center object-cover rounded-full h-8 w-8"
                  :class="ringColor(student.course.college.color)"
                  :src="`http://127.0.0.1:8000${student.avatar}`"
                />
                <img
                  v-else
                  class="ring-2 object-center object-cover rounded-full h-8 w-8"
                  :class="ringColor(student.course.college.color)"
                  :src="`https://avatars.dicebear.com/api/initials/${student.fname}.svg?background=%23bcbcbc`"
                  alt=""
                />
              </div>
            </td>
            <td>{{ student.stud_num }}</td>
            <td>
              <div>{{ student.fname + " " + student.lname }}</div>
              <div>{{ student.email }}</div>
            </td>
            <td class="text-center">
              <div
                v-if="student.email_verified_at"
                class="bg-green-400 w-min py-1 px-2 text-white rounded-md"
              >
                verified
              </div>
              <div
                v-else
                class="bg-red-400 w-min py-1 px-2 text-white rounded-md"
              >
                unverified
              </div>
            </td>
            <td class="text-center">
              <div>{{ student.course.abbr }}</div>
              <div>{{ student.course.college.abbr }}</div>
            </td>
            <td class="text-center">
              <button @click.prevent="toTrash(student)">
                <trash-icon
                  class="h-4 w-4 text-gray-700 hover:text-red-500"
                ></trash-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="loading"
      class="h-screen w-full flex items-center justify-center gap-2"
    >
      <div
        style="border-top-color: transparent"
        class="
          w-5
          h-5
          border-2 border-green-500 border-solid
          rounded-full
          animate-spin
        "
      ></div>
      <div class="uppercase text-xs font-medium">Loading please wait...</div>
    </div>
    <!--/Card-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TrashIcon } from "@heroicons/vue/solid";

import JQ from "jquery";

export default {
  name: "Students",
  components: {
    TrashIcon,
  },
  async created() {
    await this.getAllStudents();
    JQ("#students").DataTable({
      responsive: true,
      bInfo: false,
    });
    this.loading = false;
  },

  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["students"]),
  },
  methods: {
    ...mapActions(["getAllStudents"]),
    ringColor: (color) => `ring-${color}-400`,
    toTrash(student) {
      console.log(student);
    },
  },
};
</script>

<style>
/*Form fields*/
.dataTables_wrapper select,
.dataTables_wrapper .dataTables_filter input {
  @apply text-sm px-2 py-1 ml-2 rounded-md mb-2;
}

.dataTables_filter label,
.dataTables_wrapper label {
  @apply text-xs;
}

/*Row Hover*/
table.dataTable.hover tbody tr:hover,
table.dataTable.display tbody tr:hover {
  background-color: #ebf4ff; /*bg-indigo-100*/
}

/*Pagination Buttons*/
.dataTables_wrapper .dataTables_paginate .paginate_button {
  @apply text-sm font-medium;
}

/*Pagination Buttons - Current selected */
.dataTables_wrapper .dataTables_paginate .paginate_button.current {
  color: #fff !important; /*text-white*/
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /*shadow*/
  font-weight: 700; /*font-bold*/
  border-radius: 0.25rem; /*rounded*/
  background: #059877 !important; /*bg-indigo-500*/
  border: 1px solid transparent; /*border border-transparent*/
}

/*Pagination Buttons - Hover */
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #fff !important; /*text-white*/
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /*shadow*/
  font-weight: 700; /*font-bold*/
  border-radius: 0.25rem; /*rounded*/
  background: #059877 !important; /*bg-indigo-500*/
  border: 1px solid transparent; /*border border-transparent*/
}

/*Add padding to bottom border */
table.dataTable.no-footer {
  border-bottom: 1px solid #e2e8f0; /*border-b-1 border-gray-300*/
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}

/*Change colour of responsive icon*/
table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child:before,
table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child:before {
  background-color: #667eea !important; /*bg-indigo-500*/
}
</style>
