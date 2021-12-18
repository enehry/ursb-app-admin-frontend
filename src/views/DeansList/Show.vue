<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
    <Header
      title="Dean's List/View Student"
      description="Approve/Reject Student's application for deans list"
    />
    <div class="flex flex-col bg-white shadow-md rounded-md md:flex-row">
      <div class="w-full h-full p-4">
        <div class="title">
          <h1 class="text-xs font-medium text-gray-500">
            Attach Screen Shot of Grades from URS Portal
          </h1>
        </div>
        <div class="attach-image mt-2">
          <inner-image-zoom
            zoomType="click"
            className=""
            src="https://raw.githubusercontent.com/enehry/ursb-app-admin-frontend/main/src/assets/examples/ss.jpg?token=AHDNWS7IXVDTE4UDA2FBGRTBXAU3G"
            zoomSrc="https://raw.githubusercontent.com/enehry/ursb-app-admin-frontend/main/src/assets/examples/ss.jpg?token=AHDNWS7IXVDTE4UDA2FBGRTBXAU3G"
          />
        </div>
      </div>
      <div class="w-full h-full p-4">
        <div class="title">
          <h1 class="text-xs font-medium text-gray-500">
            Grades from student mobile app
          </h1>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <thead class="border-b bg-white">
                    <tr>
                      <th
                        scope="col"
                        class="
                          text-xs
                          uppercase
                          font-medium
                          text-gray-900
                          px-6
                          py-2
                        "
                      >
                        Grade
                      </th>
                      <th
                        scope="col"
                        class="
                          text-xs
                          uppercase
                          font-medium
                          text-gray-900
                          px-6
                          py-2
                        "
                      >
                        Course Code
                      </th>
                      <th
                        scope="col"
                        class="
                          text-xs
                          uppercase
                          font-medium
                          text-gray-900
                          px-6
                          py-2
                        "
                      >
                        Course Title
                      </th>
                      <th
                        scope="col"
                        class="
                          text-xs
                          uppercase
                          font-medium
                          text-gray-900
                          px-6
                          py-2
                        "
                      >
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="grade in grades"
                      :key="grade.id"
                      class="bg-white border-b"
                    >
                      <td
                        class="
                          px-6
                          py-2
                          whitespace-nowrap
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {{ grade.grade }}
                      </td>
                      <td
                        class="
                          text-sm text-gray-900
                          font-light
                          px-6
                          py-2
                          whitespace-nowrap
                        "
                      >
                        {{ grade.courseCode }}
                      </td>
                      <td
                        class="
                          text-sm text-gray-900
                          font-light
                          px-6
                          py-2
                          whitespace-nowrap
                        "
                      >
                        {{ grade.courseTitle }}
                      </td>
                      <td
                        class="
                          text-sm text-gray-900
                          font-light
                          px-6
                          py-2
                          whitespace-nowrap
                        "
                      >
                        {{ grade.unit }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="qpa mt-4 mr-4 float-right">
                <p class="text-sm font-bold">QPA: 1.17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end mt-4 gap-2">
      <button
        class="
          bg-red-500
          py-1
          px-4
          text-white text-sm
          font-medium
          shadow-md
          rounded-md
          hover:bg-red-700
        "
      >
        Reject
      </button>
      <button
        class="
          bg-green-500
          py-1
          px-4
          text-white text-sm
          font-medium
          shadow-md
          rounded-md
          hover:bg-green-700
        "
      >
        Approve
      </button>
    </div>
  </section>
</template>

<script>
import Header from "../../components/Header.vue";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
  components: {
    Header,
    "inner-image-zoom": InnerImageZoom,
  },
  data() {
    return {
      grades: [
        {
          id: 1,
          grade: 1.1,
          courseCode: "Self1",
          courseTitle: "Understanding Self",
          unit: "3.0",
        },
        {
          id: 2,
          grade: 1.2,
          courseCode: "Self1",
          courseTitle: "Understanding Self",
          unit: "3.0",
        },
        {
          id: 3,
          grade: 1.4,
          courseCode: "Self1",
          courseTitle: "Understanding Self",
          unit: "3.0",
        },
        {
          id: 4,
          grade: 1.4,
          courseCode: "Self1",
          courseTitle: "Understanding Self",
          unit: "3.0",
        },
        {
          id: 5,
          grade: 1.5,
          courseCode: "Self1",
          courseTitle: "Understanding Self",
          unit: "3.0",
        },
        {
          id: 6,
          grade: 1.1,
          courseCode: "Self1",
          courseTitle: "Understanding Self",
          unit: "3.0",
        },
      ],
    };
  },
};
</script>

<style></style>
