<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-100">
    <aside-menu> </aside-menu>
    <div class="container mx-auto px-8 my-5">
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
