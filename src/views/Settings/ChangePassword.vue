<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-md font-medium leading-6 text-gray-900">
            Change Password
          </h3>
          <p class="mt-1 text-xs text-gray-600">
            Use a symbol, number, and letter to create a password.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="bg-white text-left">
            <vee-form
              :validation-schema="changePasswordSchema"
              @submit="save"
              v-slot="{ errors }"
              ref="changeOwnPasswordForm"
            >
              <div class="px-6 pt-6 pb-12">
                <div class="w-full">
                  <label
                    for="lname"
                    class="text-left block text-sm text-gray-600"
                    >Old Password</label
                  >
                  <vee-field
                    type="password"
                    name="old_password"
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
                    :class="{
                      'border-red-500':
                        errors.old_password || changeOwnPasswordError,
                    }"
                  />
                  <span
                    v-if="changeOwnPasswordError"
                    class="text-red-500 text-xs"
                  >
                    {{ changeOwnPasswordError.message }}
                  </span>
                  <ErrorMessage class="text-red-600 text-xs" name="password" />
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  <div class="w-full">
                    <label
                      for="lname"
                      class="text-left block text-sm text-gray-600"
                      >New Password</label
                    >
                    <vee-field
                      type="password"
                      name="password"
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
                      :class="{ 'border-red-500': errors.password }"
                    />
                    <ErrorMessage
                      class="text-red-600 text-xs"
                      name="password"
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="email"
                      class="text-left block text-sm text-gray-600"
                      >Confirm Password</label
                    >
                    <vee-field
                      type="password"
                      name="password_confirmation"
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
                      :class="{
                        'border-red-500': errors.password_confirmation,
                      }"
                    />
                    <ErrorMessage
                      class="text-red-500 text-xs"
                      name="password_confirmation"
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
                    text-xs
                    font-medium
                    rounded-full
                    text-white
                    bg-gray-800
                    hover:bg-gray-600
                  "
                >
                  Change password
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      changePasswordSchema: {
        old_password: "required|min:6",
        password: "required|min:6",
        password_confirmation: "password_mismatch:@password",
      },
    };
  },
  computed: {
    ...mapGetters(["changeOwnPasswordError"]),
  },
  methods: {
    ...mapActions(["changeOwnPassword"]),
    async save(values) {
      const res = await this.changeOwnPassword(values);
      res ? this.$refs.changeOwnPasswordForm.resetForm() : null;
    },
  },
};
</script>

<style></style>
