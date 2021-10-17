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
    :validation-schema="createAdminSchema"
    @submit="save"
    v-slot="{ errors }"
  >
    <div class="create-admin block md:mt-10">
      <div class="sm:mt-0 w-full">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-md font-medium leading-6 text-gray-900">
                Create New Admin
              </h3>
              <p class="mt-1 text-xs text-gray-600">
                Use a permanent address where you can receive mail.
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
                          v-if="avatar"
                          class="object-cover rounded-full w-full h-full"
                          :src="avatarImage"
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
                        v-model="avatar"
                        name="avatar"
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
                Password
              </h3>
              <p class="mt-1 text-xs text-gray-600">Make a strong password</p>
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
                        as="select"
                        name="type"
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
                        :disabled="!userType"
                        @change="setCourses"
                        v-model="selectedCollege"
                        as="select"
                        name="college"
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
                          :value="college"
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
                        :disabled="userType !== 'Program Head'"
                        as="select"
                        v-model="course"
                        name="course"
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
                          :value="course"
                        >
                          {{ course.name }}
                        </option>
                      </vee-field>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                    <div class="w-full">
                      <label
                        for="password"
                        class="text-left block text-sm text-gray-600"
                        >Password</label
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
                        for="password"
                        class="text-left block text-sm text-gray-600"
                        >Confirm password</label
                      >
                      <vee-field
                        type="password"
                        name="confirm_password"
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
                        :class="{ 'border-red-500': errors.confirm_password }"
                      />
                      <ErrorMessage
                        class="text-red-500 text-xs"
                        name="confirm_password"
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
  async created() {
    await this.getCollegesAndCourses();
  },
  data() {
    return {
      isShow: false,
      isOk: false,
      avatar: null,
      userType: "",
      selectedCollege: null,
      fromCollege: [],
      course: null,
      createAdminSchema: {
        avatar: "mimes:image/*",
        fname: "required",
        lname: "required",
        email: "required|email|min:3|max:100",
        type: "required",
        password: "required|min:6",
        confirm_password: "password_mismatch:@password",
      },
    };
  },
  computed: {
    ...mapGetters(["collegesAndCourses", "adminErrors", "isEmailError"]),
    avatarImage() {
      if (this.avatar) {
        return URL.createObjectURL(this.avatar[0]);
      }
      return null;
    },
  },
  methods: {
    ...mapActions(["getCollegesAndCourses", "register"]),
    async save(values) {
      this.isShow = true;
      console.log(values);
      const data = new FormData();
      if (values.avatar) data.append("avatar", values.avatar[0]);
      if (values.college) data.append("college_id", values.college.id);
      if (values.course) data.append("course_id", values.course.id);

      data.append("fname", values.fname);
      data.append("mname", values.mname);
      data.append("lname", values.lname);
      data.append("email", values.email);
      data.append("password", values.password);
      data.append("position_name", values.position_name);

      if (await this.register(data)) {
        this.isOk = true;
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
      this.fromCollege = this.selectedCollege.course;
    },
  },
};
</script>

<style></style>
