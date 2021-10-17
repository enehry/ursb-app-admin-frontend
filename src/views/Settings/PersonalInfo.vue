<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-md font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-xs text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="bg-white text-left">
            <vee-form :initial-values="userData">
              <div class="px-6 pt-6 pb-12">
                <div class="block">
                  <label class="text-sm text-gray-600"> Photo </label>
                  <div class="mt-1 flex items-center">
                    <span
                      class="
                        inline-block
                        h-12
                        w-12
                        rounded-full
                        overflow-hidden
                        bg-gray-100
                        ring-2 ring-green-500 ring-offset-2
                      "
                    >
                      <img
                        v-if="this.userData.avatar != null"
                        class="object-cover rounded-full w-full h-full"
                        :src="`http://127.0.0.1:8000${this.userData.avatar}`"
                      />
                      <svg
                        v-else
                        class="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                    <button
                      type="button"
                      class="
                        ml-5
                        bg-white
                        py-2
                        px-3
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        text-sm
                        leading-4
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-green-500
                      "
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  <div class="w-full">
                    <label
                      for="first-name"
                      class="text-left block text-sm text-gray-600"
                      >First name</label
                    >
                    <vee-field
                      type="text"
                      name="fname"
                      autocomplete="given-name"
                      class="
                        py-2
                        px-3
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-green-300
                        focus:border-green-500
                        hover:border-green-600
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border border-gray-300
                        rounded-md
                        text-secondary
                      "
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="mname"
                      class="text-left block text-sm text-gray-600"
                      >Middle name</label
                    >
                    <vee-field
                      type="text"
                      name="mname"
                      autocomplete="given-name"
                      class="
                        py-2
                        px-3
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-green-300
                        focus:border-green-500
                        hover:border-green-600
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border border-gray-300
                        rounded-md
                        text-secondary
                      "
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  <div class="w-full">
                    <label
                      for="lname"
                      class="text-left block text-sm text-gray-600"
                      >Last name</label
                    >
                    <vee-field
                      type="text"
                      name="lname"
                      autocomplete="given-name"
                      class="
                        py-2
                        px-3
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-green-300
                        focus:border-green-500
                        hover:border-green-600
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border border-gray-300
                        rounded-md
                        text-secondary
                      "
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="email"
                      class="text-left block text-sm text-gray-600"
                      >Email</label
                    >
                    <vee-field
                      type="email"
                      name="email"
                      autocomplete="given-name"
                      class="
                        py-2
                        px-3
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-green-300
                        focus:border-green-500
                        hover:border-green-600
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border border-gray-300
                        rounded-md
                        text-secondary
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-green-400
                    hover:bg-green-600
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-green-600
                  "
                >
                  Save
                </button>
              </div>
            </vee-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Persona-Info",

  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    test() {
      console.log(this.userData);
    },
  },
};
</script>

<style></style>
