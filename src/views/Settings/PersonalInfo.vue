<template>
  <vee-form
    :validation-schema="personalInfoSchema"
    @submit="save"
    v-slot="{ errors }"
    :initial-values="userData"
  >
    <div class="create-admin block md:mt-10">
      <div class="sm:mt-0 w-full">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-md font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p class="mt-1 text-xs text-gray-600">
                If data not automatically reflect please re-login
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="bg-white text-left">
                <div class="px-6 pt-6 pb-12">
                  <div class="block">
                    <label class="text-sm text-gray-600"> Avatar </label>
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
                          v-if="selectedAvatar"
                          class="object-cover rounded-full w-full h-full"
                          :src="avatarImage"
                        />
                        <img
                          v-else-if="avatar"
                          class="object-cover rounded-full w-full h-full"
                          :src="this.$baseURL + avatar"
                        />
                        <img
                          v-else
                          class="object-cover rounded-full w-full h-full"
                          :src="`https://avatars.dicebear.com/api/initials/admin.svg?background=%23bcbcbc`"
                        />
                        <svg
                          else
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <vee-field
                        v-model="selectedAvatar"
                        name="image"
                        v-slot="{ handleChange, handleBlur }"
                      >
                        <input
                          class="
                            ml-5
                            bg-white
                            py-2
                            px-3
                            border border-gray-300
                            rounded-md
                            shadow-sm
                            text-xs
                            leading-4
                            text-gray-700
                            hover:bg-gray-50
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-green-500
                          "
                          :class="{ 'border-red-500': errors.image }"
                          type="file"
                          @change="handleChange"
                          @blur="handleBlur"
                          v-on:change="changeAvatar"
                        />
                      </vee-field>
                    </div>
                    <ErrorMessage class="text-red-500 text-xs" name="image" />
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
                        :class="{ 'border-red-500': errors.fname }"
                      />

                      <ErrorMessage class="text-red-500 text-xs" name="fname" />
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
                        :class="{ 'border-red-500': errors.lname }"
                      />
                      <ErrorMessage class="text-red-600 text-xs" name="lname" />
                    </div>
                    <div class="w-full">
                      <label
                        for="email"
                        class="text-left block text-sm text-gray-600"
                        >Email</label
                      >
                      <vee-field
                        disabled
                        name="email"
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
                          bg-gray-100
                          rounded-md
                          text-secondary
                        "
                      />
                    </div>
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
                    shadow-sm
                    text-xs
                    font-medium
                    rounded-full
                    text-white
                    bg-gray-800
                    hover:bg-gray-600
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </vee-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Personal-Info",
  data() {
    return {
      avatar: null,
      selectedAvatar: null,
      personalInfoSchema: {
        image: "mimes:image/jpeg,image/png,image/jpg",
        fname: "required",
        lname: "required",
      },
    };
  },
  computed: {
    ...mapGetters(["userData"]),
    avatarImage() {
      if (this.selectedAvatar) {
        return URL.createObjectURL(this.selectedAvatar[0]);
      }
      return null;
    },
  },
  created() {
    this.avatar = this.userData.avatar;
  },
  methods: {
    ...mapActions(["updateProfileInfo"]),
    async save(values) {
      const data = new FormData();
      data.append("fname", values.fname);
      data.append("mname", values.mname);
      data.append("lname", values.lname);
      if (this.selectedAvatar) data.append("avatar", this.selectedAvatar[0]);

      this.updateProfileInfo(data);
    },
  },
};
</script>

<style></style>
