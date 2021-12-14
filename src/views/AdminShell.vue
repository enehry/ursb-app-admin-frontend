<template>
  <div class="lg:flex flex-col lg:flex-row lg:min-h-screen w-full bg-gray-100">
    <aside-menu> </aside-menu>
    <div class="container bg-gray-100 mx-auto md:px-8 py-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import AsideMenu from "@/components/AsideMenu.vue";

export default {
  name: "AdminShell",
  components: {
    AsideMenu,
  },
};
</script>

<style scoped></style>
