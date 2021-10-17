<template>
  <div>
    <button @click.prevent="toggleModal">
      <slot></slot>
    </button>
    <transition
      enter-active-class="transition ease-out duration-300 transform "
      enter-from-class="opacity-0 translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
    >
      <div
        v-if="showModal"
        class="
          overflow-x-hidden overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          justify-center
          items-center
          flex
        "
      >
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--content-->
          <vee-form
            ref="collegeForm"
            :validation-schema="collegeSchema"
            @submit="save"
          >
            <div
              class="
                border-0
                rounded-lg
                shadow-lg
                relative
                flex flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none
              "
            >
              <!--header-->
              <div
                class="
                  flex
                  items-start
                  justify-between
                  p-5
                  border-b border-solid
                  rounded-t
                "
              >
                <h3 class="text-md text-primary font-bold">
                  {{ college ? "Update College" : "Add College" }}
                </h3>
                <button
                  class="text-xl text-primary hover:text-red-500"
                  v-on:click="toggleModal()"
                >
                  ×
                </button>
              </div>

              <!--body-->
              <div class="relative p-6 flex-auto">
                <div class="flex -mx-3">
                  <div class="w-full px-3">
                    <label
                      for=""
                      class="text-xs text-primary font-semibold px-1 uppercase"
                      >College Name</label
                    >

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
                          <academic-cap-icon
                            class="text-gray-400 w-6"
                          ></academic-cap-icon>
                        </div>
                        <vee-field
                          type="text"
                          name="name"
                          class="
                            w-80
                            text-sm
                            block
                            -ml-10
                            pl-10
                            px-3
                            py-2
                            rounded-lg
                            border-2 border-gray-200
                            outline-none
                            focus:border-green-500
                          "
                          :class="{ 'border-red-200': collegeCourseErrors }"
                          :value="college ? college.name : ''"
                          placeholder="Input College Name"
                        />
                      </div>

                      <ErrorMessage class="text-red-600 text-xs" name="name" />
                    </div>
                  </div>
                </div>
              </div>
              <!--footer-->
              <div
                class="
                  flex
                  items-center
                  justify-end
                  p-6
                  border-t border-solid
                  rounded-b
                "
              >
                <button
                  class="
                    text-red-500
                    bg-transparent
                    border border-solid border-red-500
                    hover:bg-red-500 hover:text-white
                    active:bg-red-600
                    font-bold
                    uppercase
                    text-xs
                    px-4
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  v-on:click="toggleModal()"
                >
                  Close
                </button>
                <button
                  class="
                    text-green-500
                    background-transparent
                    font-bold
                    uppercase
                    px-4
                    py-2
                    text-xs
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </vee-form>
        </div>
      </div>
    </transition>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { AcademicCapIcon } from "@heroicons/vue/solid";
export default {
  components: {
    AcademicCapIcon,
  },
  props: {
    college: Object,
  },

  name: "DialogCourse",
  data() {
    return {
      showModal: false,
      collegeSchema: {
        name: "required|min:6|max:100",
      },
    };
  },
  computed: {
    ...mapGetters(["collegeCourseErrors"]),
  },
  methods: {
    ...mapActions(["saveCollege", "resetCollegeCourseErrors", "updateCollege"]),
    toggleModal: function () {
      this.showModal = !this.showModal;
      if (this.$refs.collegeForm) {
        this.$refs.collegeForm.resetForm();
        this.resetCollegeCourseErrors();
      }
    },
    async save(values) {
      if (!this.college) {
        const collegeName = values.name.split(" ");
        const abbr = [];

        collegeName.forEach((e) => {
          if (collegeName.length <= 3) {
            abbr.push(e.charAt(0).toUpperCase());
          } else {
            if (e.charAt(0) !== "o") {
              abbr.push(e.charAt(0).toUpperCase());
            }
          }
        });
        values.abbr = abbr.join("");
        if (await this.saveCollege(values)) this.toggleModal();
      } else {
        const c = this.college;
        c.name = values.name;

        const collegeName = values.name.split(" ");
        const abbr = [];

        collegeName.forEach((e) => {
          if (collegeName.length <= 3) {
            abbr.push(e.charAt(0).toUpperCase());
          } else {
            if (e.charAt(0) !== "o") {
              abbr.push(e.charAt(0).toUpperCase());
            }
          }
        });
        c.abbr = abbr.join("");

        if (await this.updateCollege(c)) this.toggleModal();
      }
      if (this.collegeCourseErrors) {
        this.$refs.collegeForm.setFieldError(
          "name",
          this.collegeCourseErrors.errors.name.join()
        );
      }
    },
  },
};
</script>
