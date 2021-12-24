<template>
  <button
    @click.prevent="toggleModal()"
    class="
      flex
      gap-2
      px-4
      py-2
      text-xs
      capitalize
      text-gray-500
      w-full
      hover:bg-green-500 hover:text-white
    "
  >
    <pencil-alt-icon class="w-4 h-4 hover:text-white"></pencil-alt-icon>
    Edit
  </button>
  <admin-modal :showModal="isShow">
    <vee-form
      ref="editPostForm"
      :initial-values="{
        title: post.title,
        body: post.body,
        courses: post.courses.map((course) => course.course_id),
      }"
      @submit="onSubmit"
      :validation-schema="postSchema"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2 mr-12">
          <pencil-alt-icon class="w-6 h-6 text-gray-900"></pencil-alt-icon>
          <h2 class="heading uppercase text-gray-900 text-sm font-bold">
            Edit Post
          </h2>
        </div>

        <button
          class="text-xl text-primary hover:text-red-500"
          v-on:click="toggleModal()"
        >
          ×
        </button>
      </div>
      <div>
        <div class="create-post mb-2 mx-auto max-w-xl">
          <div class="editor flex flex-col p-4 max-w-2xl mb-4">
            <div class="choices mb-2 w-full">
              <div class="flex flex-row items-center gap-2 justify-end">
                <label class="text-xs text-gray-400" for=""> Show to : </label>
                <div
                  v-for="course in courses"
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
              v-model="body"
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
                <img class="h-14 w-14 object-cover" :src="postImage()" alt="" />
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

              <div v-else-if="post.images[0] && !isRemove" class="flex">
                <img
                  class="h-14 w-14 object-cover"
                  :src="`${this.$baseURL}${post.images[0].image_url}`"
                  alt=""
                />
                <x-circle-icon
                  @click.prevent="isRemove = true"
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
          </div>
        </div>
      </div>

      <div class="mt-2">
        <div class="flex justify-end">
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
              px-2
              py-1
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
  </admin-modal>
</template>

<script>
import { PencilAltIcon, XCircleIcon } from "@heroicons/vue/solid";
import AdminModal from "@/components/AdminModal.vue";
import { mapActions } from "vuex";

export default {
  components: {
    AdminModal,
    PencilAltIcon,
    XCircleIcon,
  },
  data() {
    return {
      body: "",
      images: null,
      isRemove: false,
      isShow: false,
      postSchema: {
        image: "mimes:image/jpg,png,jpeg",
        title: "required",
        body: "required",
        courses: "required",
      },
      isLoading: false,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    courses: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updatePost"]),
    toggleModal() {
      this.isShow = !this.isShow;
      this.isRemove = false;
    },
    postImage() {
      if (this.images) {
        return URL.createObjectURL(this.images[0]);
      }
      return null;
    },
    async onSubmit(values) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append("id", this.post.id);
      formData.append("title", values.title);
      formData.append("body", values.body);
      formData.append("courses", JSON.stringify(values.courses));
      formData.append("isImageRemove", this.isRemove);
      if (this.images) {
        formData.append("images", this.images[0]);
      }
      await this.updatePost(formData);
      this.isShow = false;
      this.isLoading = false;
      console.log(values);
    },
  },
};
</script>

<style></style>
