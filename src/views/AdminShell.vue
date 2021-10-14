<template>
  <div class="relative min-h-screen md:flex bg-gray-100">
    <aside-menu> </aside-menu>
    <div class="container mx-auto px-8 my-5">
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
    return {
      name: "ArrowDownIcon",
    };
  },
};
</script>

<style></style>
