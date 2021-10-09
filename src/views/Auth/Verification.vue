<template>
  <div class="flex justify-end bg-gray-100 p-4">
    <button class="bg-gray-100 hover:text-green-500">Logout</button>
  </div>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="md:p-20 p-12 -mt-20 shadow-md rounded-sm bg-white">
      <div class="flex items-center justify-center h-full">
        <div class="block">
          <h1 class="mb-4 text-center">
            Please Enter Your Verification Code To Continue
          </h1>
          <form action="">
            <div class="block w-full px-3 mb-5 text-center">
              <label for="" class="text-sm px-1">Verification Code</label>
              <div class="block">
                <div class="flex items-center content-center justify-center">
                  <input
                    v-for="n in 6"
                    :key="n"
                    class="
                      md:h-12 md:w-12
                      h-10
                      w-10
                      md:mx-2
                      mx-1
                      mt-2
                      text-center
                      font-bold
                      text-lg
                      border-gray-400 border
                      hover:border-green-600
                      focus:outline-none focus:border-green-600 focus:border-5
                      rounded-md
                    "
                    :class="{ 'border-red-500': error }"
                    v-model.number="otp[n - 1]"
                    type="text"
                    @keyup="next($event.target, $event.key, $event)"
                    @keypress="onlyNumber($event)"
                    maxlength="1"
                    minlength="1"
                  />
                </div>
                <div v-if="error" class="text-red-500 mt-2 text-sm">
                  {{ error }}
                </div>
                <button
                  @click.prevent="validate()"
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
                    py-3
                    font-semibold
                    flex
                    items-center
                    mt-4
                    mx-auto
                  "
                >
                  <div class="flex items-center font-normal">
                    <div class="">Enter</div>
                    <div
                      v-if="isLoading"
                      style="border-top-color: transparent"
                      class="
                        ml-2
                        pl-2
                        w-4
                        h-4
                        border-2 border-white border-solid
                        rounded-full
                        animate-spin
                      "
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      otp: [],
      error: null,
    };
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions(["verifyUserCode"]),
    next(elem, key, e) {
      let keyCode = e.keyCode ? e.keyCode : e.which;
      if ((keyCode < 48 || keyCode > 57) && key !== "Backspace") {
        e.preventDefault();
        return;
      }
      const currentIndex = Array.from(elem.form.elements).indexOf(elem);
      console.log(key);
      if (key === "Backspace") {
        elem.form.elements
          .item(currentIndex == 0 ? 0 : currentIndex - 1)
          .focus();
      } else {
        elem.form.elements
          .item(
            currentIndex < elem.form.elements.length - 1 ? currentIndex + 1 : 0
          )
          .focus();
      }
    },
    onlyNumber(e) {
      let keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode < 48 || keyCode > 57) {
        e.preventDefault();
        return;
      }
    },
    validate() {
      const otp = this.otp.join("");
      if (otp.length == 6) {
        this.verifyUserCode(otp);
      } else {
        this.error = "Please fill all the fields";
      }
    },
  },
};
</script>

<style></style>
