<template>
  <button
    @click="toggleModal()"
    class="
      flex
      justify-center
      items-center
      bg-yellow-500
      rounded-full
      hover:bg-yellow-600
      px-1
      py-1
    "
  >
    <archive-icon class="h-4 text-white"></archive-icon>
  </button>
  <admin-modal :showModal="isShow">
    <div class="">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2 mr-12">
          <archive-icon class="w-6 h-6 text-gray-900"></archive-icon>
          <h2 class="heading uppercase text-gray-900 text-sm font-bold">
            Archive Posts
          </h2>
        </div>

        <button
          class="text-xl text-primary hover:text-red-500"
          v-on:click="toggleModal()"
        >
          ×
        </button>
      </div>

      <div class="admins mt-2">
        <div v-if="archivePosts.length > 0">
          <div
            v-for="archive in archivePosts"
            :key="archive.id"
            class="my-2 w-full flex justify-between items-center"
          >
            <div class="flex items-center mr-4">
              <div class="block">
                <h3 class="text-sm font-medium">{{ archive.title }}</h3>
                <p class="text-xs text-light">
                  {{ archive.posted_by.fname }} {{ archive.posted_by.lname }} •
                  {{ timeDeleted(archive.deleted_at) }}
                </p>
                <p class="text-xs mt-1">{{ shortenText(archive.body) }}</p>
              </div>
            </div>
            <div class="flex gap-2">
              <button @click.prevent="toggleDelete(archive.id)">
                <trash-icon class="w-5 h-5 text-red-500"></trash-icon>
              </button>
              <button @click.prevent="restore(archive)">
                <refresh-icon class="w-5 h-5 text-green-500"></refresh-icon>
              </button>
            </div>
          </div>
        </div>
        <div v-else class="flex items-center my-4 w-full justify-center gap-2">
          <information-circle-icon
            class="h-5 w-5 text-green-500"
          ></information-circle-icon>
          <h1 class="text-xs font-medium">Empty Archive Post</h1>
        </div>
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
        </div>
      </div>
    </div>
  </admin-modal>
  <admin-modal :showModal="isWarning">
    <div class="heading flex items-center gap-2">
      <exclamation-icon class="w-5 h-5 text-red-500"></exclamation-icon>
      <h1 class="uppercase text-red-500 font-semibold text-sm">Warning !</h1>
    </div>
    <div>
      <p class="text-xs">This action cannot be undo!</p>
      <p class="text-xs">
        Are you sure you want to permanent delete this post ?
      </p>
    </div>
    <!--footer-->
    <div class="flex items-center justify-end mt-4">
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
        v-on:click="isWarning = false"
      >
        No
      </button>
      <button
        @click.prevent="permanentDelete()"
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
        Yes
      </button>
    </div>
  </admin-modal>
</template>

<script>
import {
  ArchiveIcon,
  TrashIcon,
  ExclamationIcon,
  RefreshIcon,
  InformationCircleIcon,
} from "@heroicons/vue/solid";
import AdminModal from "@/components/AdminModal.vue";
import { mapActions, mapGetters } from "vuex";
import timeAgo from "@/includes/timeAgo";
export default {
  components: {
    ArchiveIcon,
    AdminModal,
    ExclamationIcon,
    TrashIcon,
    RefreshIcon,
    InformationCircleIcon,
  },
  data() {
    return {
      isShow: false,
      isWarning: false,
      postId: null,
    };
  },
  async created() {
    await this.getArchivePosts();
    console.log(this.archivePosts);
  },
  methods: {
    ...mapActions(["getArchivePosts", "deletePost", "restorePost"]),
    permanentDelete() {
      this.isWarning = false;
      this.deletePost(this.postId);
    },
    toggleModal() {
      this.isShow = !this.isShow;
    },
    toggleDelete(id) {
      this.isWarning = !this.isWarning;
      this.postId = id;
    },
    timeDeleted(date) {
      // Create formatter (English).
      var temp = new Date(date);
      return timeAgo.format(temp, "round");
    },
    shortenText(text) {
      if (text.length > 100) {
        return text.substring(0, 100) + "...";
      } else {
        return text;
      }
    },
    restore(post) {
      this.restorePost(post);
    },
  },
  computed: {
    ...mapGetters(["archivePosts"]),
  },
};
</script>

<style></style>
