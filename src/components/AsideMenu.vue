<template>
  <div
    class="
      flex flex-col
      w-full
      md:w-60
      text-gray-700
      bg-white
      dark-mode:text-gray-200 dark-mode:bg-gray-800
      flex-shrink-0
      md:h-screen md:sticky md:top-0
    "
  >
    <div
      class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
    >
      <a
        href="#"
        class="
          text-lg
          font-semibold
          tracking-widest
          text-gray-900
          uppercase
          rounded-lg
          dark-mode:text-white
          focus:outline-none focus:shadow-outline
        "
        >URSB App</a
      >
      <button
        class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
        @click="toggle"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-6 h-6 text-gray-600"
        >
          <path
            v-show="!open"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            v-show="open"
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      :class="{ block: open, hidden: !open }"
      class="flex-grow md:block pb-4 md:pb-0 md:overflow-y-auto"
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
            ring ring-offset-base-100 ring-offset-2
          "
          :class="`ring-${userData.college.color}-500`"
        >
          <img
            v-if="userData.avatar"
            class="object-cover rounded-full w-full h-full"
            :src="`http://127.0.0.1:8000${this.userData.avatar}`"
          />
          <img
            v-else
            class="object-cover object-center rounded-full w-full h-full"
            :src="`https://avatars.dicebear.com/api/initials/${userData.fname}.svg?background=%23bcbcbc`"
            alt=""
          />
        </div>
        <h3 class="text-md font-bold">{{ fullName }}</h3>
        <h6 class="text-xs">{{ email }}</h6>
        <h6 class="text-xs">{{ position }}</h6>
        <h3 class="text-md mt-4 font-bold">Menu</h3>
      </div>
      <hr class="border-2" />
      <!-- nav -->
      <div class="pl-2">
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
      </div>
    </nav>
  </div>
</template>

<script>
// import { MenuAlt3Icon } from "@heroicons/vue/outline";
import { mapGetters } from "vuex";
import menus from "@/menus.js";

export default {
  data() {
    return {
      open: false,
      menus,
    };
  },
  components: {},
  computed: {
    ...mapGetters(["userData", "fullName", "email", "position"]),
  },
  methods: {
    toggle() {
      this.open = !this.open;
      console.log(this.open);
    },
  },
};
</script>

<style></style>
