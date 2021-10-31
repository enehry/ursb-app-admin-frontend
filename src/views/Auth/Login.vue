<template>
  <div
    class="
      min-w-screen min-h-screen
      bg-gray-300
      flex
      items-center
      justify-center
      px-5
      py-5
    "
  >
    <div
      class="
        rounded-lg
        bg-gray-100
        text-gray-500
        shadow-xl
        w-full
        overflow-hidden
      "
      style="max-width: 1000px"
    >
      <div class="md:flex">
        <div class="hidden md:block w-1/2 bg-green-400 p-24 text-center">
          <div class="content-center justify-center">
            <h1 class="text-3xl text-gray-100 font-bold">The CCS App</h1>
            <p class="text-sm text-gray-100 mb-10">
              Manage The CCS App mobile app using admin panel
            </p>
            <img
              class="max-w-screen-lg mx-auto"
              src="@/assets/images/auth_bg.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="w-full md:w-1/2 p-10 md:p-24">
          <vee-form :validation-schema="loginSchema" @submit="submitLogin">
            <div class="mb-10">
              <h1 class="font-bold text-2xl text-gray-600">Login</h1>
              <p class="text-sm">Sign in admin to continue</p>
            </div>
            <div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <label for="" class="text-sm px-1">Email</label>
                  <div class="block">
                    <div class="flex">
                      <div
                        class="
                          w-10
                          z-10
                          pl-1
                          text-center
                          pointer-events-none
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <user-icon class="text-gray-400 w-6"></user-icon>
                      </div>
                      <vee-field
                        :disabled="isLoading"
                        type="email"
                        name="email"
                        class="
                          text-gray-600 text-sm
                          w-full
                          pl-10
                          pr-3
                          py-2
                          -ml-10
                          rounded-lg
                          border-2 border-gray-200
                          outline-none
                        "
                        placeholder="john@example.com"
                      />
                    </div>

                    <ErrorMessage class="text-red-600 text-xs" name="email" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-12">
                  <label for="" class="text-xs font-semibold px-1"
                    >Password</label
                  >
                  <div class="block">
                    <div class="flex">
                      <div
                        class="
                          text-sm
                          w-10
                          z-10
                          pl-1
                          text-center
                          pointer-events-none
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <lock-closed-icon
                          class="text-gray-400 w-6"
                        ></lock-closed-icon>
                      </div>
                      <vee-field
                        :disabled="isLoading"
                        type="password"
                        name="password"
                        class="
                          text-gray-600
                          block
                          w-full
                          -ml-10
                          pl-10
                          pr-3
                          py-2
                          rounded-lg
                          border-2 border-gray-200
                          outline-none
                          focus:border-green-500
                          text-sm
                        "
                        placeholder="***********"
                      />
                    </div>
                    <ErrorMessage
                      class="text-red-600 text-xs"
                      name="password"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-end">
                <button
                  :disabled="isLoading"
                  class="
                    text-sm
                    w-30
                    bg-green-400
                    hover:bg-green-600
                    focus:bg-green-600
                    text-white
                    rounded-lg
                    px-4
                    py-2
                    font-semibold
                    flex
                    items-center
                  "
                >
                  <div class="flex items-center font-normal">
                    <div class="pr-2">Login</div>
                    <div
                      v-if="isLoading"
                      style="border-top-color: transparent"
                      class="
                        w-4
                        h-4
                        border-2 border-white border-solid
                        rounded-full
                        animate-spin
                      "
                    ></div>
                    <chevron-right-icon v-else class="w-6"></chevron-right-icon>
                  </div>
                </button>
              </div>
            </div>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UserIcon,
  LockClosedIcon,
  ChevronRightIcon,
} from "@heroicons/vue/outline";
import DeviceDetector from "device-detector-js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  components: { UserIcon, LockClosedIcon, ChevronRightIcon },
  data() {
    return {
      loginSchema: {
        email: "required|email|min:6|max:100",
        password: "required|min:6|max:100",
      },
    };
  },
  computed: {
    ...mapGetters(["isLoading", "errors"]),
  },
  methods: {
    ...mapActions(["login"]),
    submitLogin(values) {
      values.device_name = "Web";
      console.log(values);
      this.logInSubmission = true;
      const deviceDetector = new DeviceDetector();
      const device = deviceDetector.parse(navigator.userAgent);

      console.log(device);

      this.login(values);
    },
  },
};
</script>

<style></style>
