<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
      <h2 class="text-md font-bold uppercase text-gray-600">Admins</h2>
      <h6 class="text-sm text-gray-400">
        Manage admins. You can register, view and delete admins on this page.
      </h6>
    </div>
    <div>
      <div class="flex items-center justify-between w-full mb-5">
        <div class="pt-2 flex content-center items-center text-gray-600">
          <input
            class="
              border-2 border-gray-300
              bg-white
              h-10
              px-5
              pr-8
              w-80
              rounded-lg
              text-xs
              hover:border-green-600
              focus:outline-none focus:border-green-600
            "
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class="w-5 h-5 -ml-7 mr-4">
            <search-icon></search-icon>
          </button>
        </div>
        <router-link
          :to="{ name: 'CreateAdmin' }"
          class="
            flex
            justify-center
            items-center
            w-7
            h-7
            bg-secondary
            rounded-full
            hover:bg-green-600
          "
        >
          <plus-icon class="h-5 text-white"></plus-icon>
        </router-link>
      </div>
    </div>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      <div
        class="
          w-full
          bg-white
          rounded-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
          <p class="text-base text-gray-400 font-normal">Software Engineer</p>
        </div>
      </div>
      <div
        class="
          w-full
          bg-white
          rounded-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
          <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
        </div>
      </div>
      <div
        class="
          w-full
          bg-white
          rounded-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
          <p class="text-base text-gray-400 font-normal">Dev Ops</p>
        </div>
      </div>
      <div
        class="
          w-full
          bg-white
          rounded-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
          <p class="text-base text-gray-400 font-normal">Software Engineer</p>
        </div>
      </div>
      <div
        class="
          w-full
          bg-white
          rounded-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
          <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
        </div>
      </div>
      <div
        class="
          w-full
          bg-white
          rounded-lg
          p-12
          flex flex-col
          justify-center
          items-center
        "
      >
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
          <p class="text-base text-gray-400 font-normal">Dev Ops</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SearchIcon, PlusIcon } from "@heroicons/vue/solid";
export default {
  components: {
    SearchIcon,
    PlusIcon,
  },
};
</script>

<style></style>
