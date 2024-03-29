<template>
  <div class="create-post mb-2 mx-auto max-w-xl">
    <vee-form
      ref="postForm"
      :initial-values="{
        courses,
      }"
      @submit="onSubmit"
      class="
        editor
        mx-auto
        w-full
        flex flex-col
        text-gray-800
        border border-gray-300
        bg-white
        rounded-md
        p-4
        shadow-lg
        max-w-2xl
        mb-4
      "
      :validation-schema="postSchema"
    >
      <div class="choices mb-2 w-full">
        <div class="flex flex-row items-center gap-2 justify-end">
          <label class="text-xs text-gray-400" for=""> Show to : </label>
          <div
            v-for="course in coursesForPosting"
            :key="course.id"
            class="flex items-center"
          >
            <vee-field
              class="
                h-3
                w-3
                focus:ring-0
                rounded-md
                bg-white
                transition
                duration-200
                cursor-pointer
                form-checkbox
                mr-1
              "
              type="checkbox"
              :value="course.id"
              name="courses"
            />
            <label class="font-medium text-xs text-gray-800" for="">{{
              course.abbr
            }}</label>
          </div>
          <ErrorMessage
            v-if="!isLoading"
            class="text-red-500 text-xs"
            name="courses"
          />
        </div>
      </div>
      <vee-field
        class="
          title
          text-xs
          bg-gray-100
          border border-gray-300
          p-2
          mb-2
          outline-none
          font-medium
        "
        spellcheck="false"
        placeholder="Title"
        type="text"
        name="title"
      />
      <ErrorMessage class="text-red-500 text-xs" name="title" />
      <vee-field
        as="textarea"
        name="body"
        class="
          description
          bg-gray-100
          sec
          p-3
          border border-gray-300
          outline-none
          text-xs
          decoration-none
          font-medium
        "
        maxlength="255"
        spellcheck="false"
        placeholder="Write something about this post..."
      />
      <ErrorMessage class="text-red-500 text-xs" name="body" />
      <!-- icons -->
      <div class="icons flex text-gray-500 m-2">
        <label>
          <svg
            class="
              mr-2
              cursor-pointer
              hover:text-gray-700
              border
              rounded-full
              p-1
              h-7
            "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <vee-field v-model="images" name="image" type="file" hidden />
        </label>
        <ErrorMessage class="text-red-500 text-xs" name="image" />
        <div v-if="images" class="flex">
          <img class="h-14 w-14 object-cover" :src="postImage" alt="" />
          <x-circle-icon
            @click.prevent="images = null"
            class="
              w-5
              h-5
              mt-1
              text-gray-400
              cursor-pointer
              hover:text-gray-700
            "
          >
          </x-circle-icon>
        </div>
        <div class="count ml-auto text-gray-400 text-xs font-semibold">
          {{ body.length }}/255
        </div>
      </div>
      <!-- buttons -->
      <div class="buttons flex w-full justify-end">
        <button type="submit" :disabled="isLoading">
          <paper-airplane-icon
            class="w-5 h-5 text-gray-500 hover:text-gray-900"
          >
          </paper-airplane-icon>
        </button>
      </div>
    </vee-form>
  </div>
</template>

<script>
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/vue/solid";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CreatePost",
  components: {
    PaperAirplaneIcon,
    XCircleIcon,
  },
  data() {
    return {
      courses: [],
      body: "",
      title: "",
      images: null,
      postSchema: {
        image: "mimes:image/jpg,png,jpeg",
        title: "required",
        body: "required",
        courses: "required",
      },
      isLoading: false,
    };
  },
  async created() {
    if (this.coursesForPosting.length <= 0) {
      this.isLoading = true;
      await this.getCoursesForPosting();
      this.isLoading = false;
    }
    this.courses = this.coursesForPosting.map((course) => course.id);
  },
  computed: {
    ...mapGetters(["coursesForPosting"]),
    postImage() {
      if (this.images) {
        return URL.createObjectURL(this.images[0]);
      }
      return null;
    },
  },
  methods: {
    ...mapActions(["createNewPost", "getCoursesForPosting"]),
    async onSubmit(value) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append("title", value.title);
      formData.append("body", value.body);
      formData.append("courses", JSON.stringify(value.courses));
      if (this.images) {
        formData.append("images", this.images[0]);
      }
      await this.createNewPost(formData);
      this.$refs.postForm.resetForm();
      this.isLoading = false;
      console.log(formData.get("courses"));
    },
  },
};
</script>

<style></style>
