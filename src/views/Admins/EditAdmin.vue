<template>
  <admin-modal :showModal="isShow">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <dots-circle-horizontal-icon
          class="text-green-500 w-10 h-10"
        ></dots-circle-horizontal-icon>
        <div class="flex flex-col ml-3">
          <div class="font-medium text-sm leading-none">
            Creating Admin Account
          </div>
          <p class="text-xs text-gray-600 leading-none mt-1">Please Wait...</p>
        </div>
      </div>
      <button
        :disabled="!isOk"
        class="
          flex-no-shrink
          bg-green-500
          px-5
          ml-4
          py-2
          text-xs
          shadow-sm
          hover:shadow-lg
          font-semibold
          tracking-wider
          text-white
          rounded-md
          uppercase
        "
        @click.prevent="closeModal"
      >
        <div
          v-if="!isOk"
          style="border-top-color: transparent"
          class="
            w-4
            h-4
            border-2 border-white border-solid
            rounded-full
            animate-spin
          "
        ></div>
        <span v-else>Ok</span>
      </button>
    </div>
  </admin-modal>
  <vee-form
    ref="updateAdminForm"
    :validation-schema="createAdminSchema"
    @submit="save"
    v-slot="{ errors }"
    :initial-values="admin"
  >
    <div class="create-admin block md:mt-10">
      <div class="sm:mt-0 w-full">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-md font-medium leading-6 text-gray-900">
                Update Admin
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
                          :class="{ 'border-red-500': errors.avatar }"
                          type="file"
                          @change="handleChange"
                          @blur="handleBlur"
                          v-on:change="changeAvatar"
                        />
                      </vee-field>
                    </div>
                    <ErrorMessage class="text-red-500 text-xs" name="avatar" />
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
                        :class="{
                          'border-red-500': errors.email || isEmailError,
                        }"
                      />
                      <span v-if="isEmailError" class="text-red-500 text-xs">
                        {{ adminErrors.errors.email.join() }}
                      </span>
                      <ErrorMessage class="text-red-600 text-xs" name="email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-10 sm:mt-0 w-full">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-md font-medium leading-6 text-gray-900">
                Position
              </h3>
              <p class="mt-1 text-xs text-gray-600">
                Change Admin Current Position
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="bg-white text-left">
                <div class="px-6 pt-6 pb-12">
                  <div class="grid grid-flow-col-1 mt-4">
                    <div class="w-full">
                      <label
                        for="first-name"
                        class="text-left block text-sm text-gray-600"
                        >User type</label
                      >
                      <vee-field
                        v-model="userType"
                        v-on:change="changeUserType()"
                        as="select"
                        name="position"
                        class="
                          text-xs
                          block
                          w-full
                          py-2
                          px-3
                          text-gray-800
                          bg-white
                          border border-gray-300
                          transition
                          duration-500
                          focus:outline-none focus:border-green-500
                          rounded-md
                          shadow-sm
                        "
                        :class="{ 'border-red-500': errors.type }"
                      >
                        <option value="" selected disabled>
                          Select user type
                        </option>
                        <option value="Admin">ADMIN</option>
                        <option value="Program Head">PROGRAM HEAD</option>
                      </vee-field>
                      <ErrorMessage class="text-red-600 text-xs" name="type" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                    <div class="w-full" disabled>
                      <label
                        for="college"
                        class="text-left block text-sm text-gray-600"
                        >College</label
                      >
                      <vee-field
                        @change="setCourses"
                        v-model="selectedCollege"
                        as="select"
                        name="college_id"
                        class="
                          text-xs
                          block
                          w-full
                          py-2
                          px-3
                          text-gray-800
                          bg-white
                          border border-gray-300
                          transition
                          duration-500
                          focus:outline-none focus:border-green-500
                          rounded-md
                          shadow-sm
                        "
                      >
                        <option value="" selected disabled>
                          Select college
                        </option>
                        <option
                          v-for="college in collegesAndCourses"
                          :key="college.id"
                          :value="college.id"
                        >
                          {{ college.name }}
                        </option>
                      </vee-field>
                    </div>
                    <div class="w-full">
                      <label
                        for="first-name"
                        class="text-left block text-sm text-gray-600"
                        >Course</label
                      >
                      <vee-field
                        :disabled="userType === 'Program Head'"
                        as="select"
                        v-model="course"
                        name="course_id"
                        class="
                          text-xs
                          block
                          w-full
                          py-2
                          px-3
                          mt-1
                          text-gray-800
                          bg-white
                          border border-gray-300
                          transition
                          duration-500
                          focus:outline-none focus:border-green-500
                          rounded-md
                          shadow-sm
                        "
                      >
                        <option value="" selected disabled>
                          Select Course
                        </option>
                        <option
                          v-for="course in fromCollege"
                          :key="course.id"
                          :value="course.id"
                        >
                          {{ course.name }}
                        </option>
                      </vee-field>
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
import { DotsCircleHorizontalIcon } from "@heroicons/vue/outline";
export default {
  name: "create-admin",
  components: {
    DotsCircleHorizontalIcon,
  },
  props: ["id"],
  async created() {
    await this.getCollegesAndCourses();
    await this.getAdmin(this.$route.params.id);
    this.fromCollege = this.collegesAndCourses.find(
      (college) => college.id === this.admin.college_id
    ).course;
    this.avatar = this.admin.avatar;
  },
  data() {
    return {
      isShow: false,
      isOk: false,
      avatar: null,
      selectedAvatar: null,
      userType: "",
      selectedCollege: null,
      fromCollege: [],
      course: null,
      createAdminSchema: {
        image: "mimes:image/*",
        fname: "required",
        lname: "required",
        position: "required",
        college_id: "required",
      },
    };
  },
  computed: {
    ...mapGetters([
      "collegesAndCourses",
      "adminErrors",
      "isEmailError",
      "admin",
    ]),
    avatarImage() {
      if (this.selectedAvatar) {
        return URL.createObjectURL(this.selectedAvatar[0]);
      }
      return null;
    },
  },
  methods: {
    ...mapActions(["getCollegesAndCourses", "updateAdmin", "getAdmin"]),
    async save(values) {
      this.isShow = true;
      console.log(values);
      const data = new FormData();
      if (values.image) data.append("avatar", values.image[0]);
      data.append("college_id", values.college_id);
      if (values.course_id) data.append("course_id", values.course_id);

      data.append("fname", values.fname);
      data.append("mname", values.mname);
      data.append("lname", values.lname);
      data.append("id", this.admin.id);

      data.append("position", values.position);

      if (await this.updateAdmin(data)) {
        this.isOk = true;
        this.$refs.updateAdminForm.resetForm();
        this.$router.push("/admins");

        return;
      } else {
        this.isShow = false;
        return;
      }
    },
    closeModal() {
      this.isShow = false;
    },
    setCourses() {
      this.course = null;
      this.fromCollege = this.collegesAndCourses.find(
        (x) => x.id == this.selectedCollege
      ).course;
    },
    changeUserType() {
      if (this.userType === "Admin") {
        this.course = null;
      }
    },
  },
};
</script>

<style></style>
