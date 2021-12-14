<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
    <Header
      title="Dean's List/View Student"
      description="Approve/Reject Student's application for deans list"
    />
    <div class="flex flex-col bg-white shadow-md md:flex-row">
      <div class="w-full h-full p-4">
        <div class="title">
          <h1 class="text-xs font-medium text-gray-500">
            Attach Screen Shot of Grades from URS Portal
          </h1>
          <div class="attach-image h-screen mt-2">
            <inner-image-zoom
              src="../assets/examples/ss.jpg"
              zoomSrc="../assets/examples/ss.jpg"
            />
          </div>
        </div>
      </div>
      <div class="w-full h-20 bg-gray-500"></div>
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
};
</script>

<style></style>
