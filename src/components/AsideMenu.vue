<template>
  <!-- mobile menu bar -->

  <div
    class="
      bg-green-600
      text-gray-100
      flex
      justify-between
      content-center
      items-center
      md:hidden
    "
  >
    <!-- logo -->
    <a href="#" class="block p-4 text-white font-bold">URSB APP</a>

    <!-- mobile menu button -->
    <button
      @click.prevent="toggle"
      class="mobile-menu-button h-8 w-8 focus:outline-none mr-2"
    >
      <menu-alt3-Icon
        class="text-white hover:text-gray-700 focus:text-gray-700"
      ></menu-alt3-Icon>
    </button>
  </div>

  <!-- sidebar -->
  <div
    :class="{ '-translate-x-full': isToggle }"
    class="
      h-screen
      sticky
      top-0
      shadow-md
      sidebar
      bg-white
      text-gray-800
      w-64
      space-y-6
      inset-y-0
      pt-4
      left-0
      transform
      md:translate-x-0
      transition
      duration-200
      ease-in-out
    "
  >
    <!-- logo -->
    <div class="mx-7 block">
      <div
        class="
          mb-2
          mt-5
          rounded-full
          w-16
          h-16
          ring ring-green-600 ring-offset-base-100 ring-offset-2
        "
      >
        <img
          class="object-cover rounded-full w-full h-full"
          :src="`http://127.0.0.1:8000${this.userData.avatar}`"
        />
      </div>
      <h3 class="text-md font-bold">{{ fullName }}</h3>
      <h6 class="text-xs">{{ email }}</h6>
      <h6 class="text-xs">{{ position }}</h6>
      <h3 class="text-md mt-4 font-bold">Menu</h3>
    </div>
    <hr class="border-2" />
    <!-- nav -->
    <nav class="px-2">
      <router-link
        v-for="menu in menus"
        :key="menu.routeName"
        :to="{ name: `${menu.routeName}` }"
        href="#"
        class="
          menuItem-active-link
          block
          py-2.5
          px-4
          rounded
          transition
          duration-200
          text-sm
          hover:bg-green-600 hover:text-white
        "
      >
        {{ menu.menuName }}
      </router-link>
    </nav>
  </div>
</template>

<script>
import { MenuAlt3Icon } from "@heroicons/vue/outline";
import { mapGetters } from "vuex";
import menus from "@/menus.js";

export default {
  data() {
    return {
      isToggle: true,
      menus,
    };
  },
  components: {
    MenuAlt3Icon,
  },
  computed: {
    ...mapGetters(["userData", "fullName", "email", "position"]),
  },
  methods: {
    toggle() {
      this.isToggle = !this.isToggle;
      console.log(this.isToggle);
    },
  },
};
</script>

<style></style>
