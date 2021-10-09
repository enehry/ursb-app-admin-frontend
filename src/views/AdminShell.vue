<template>
  <div class="relative min-h-screen md:flex bg-gray-100">
    <aside-menu> </aside-menu>
    <div class="container mx-auto">
      <router-view></router-view>
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
  data() {
    return {};
  },
};
</script>

<style></style>
