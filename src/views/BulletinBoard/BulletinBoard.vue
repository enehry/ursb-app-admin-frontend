<template>
  <div class="lg:flex block">
    <div class="block w-full lg:mr-4">
      <!--- POSTS LIST -->
      <search></search>
      <create-post></create-post>
      <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>

    <div class="w-full mt-24 lg:w-1/3">
      <div
        class="
          heading
          flex
          pl-2
          items-center
          h-10
          bg-white
          mb-3
          shadow-md
          rounded-md
        "
      >
        <h1 class="uppercase text-xs font-semibold">My recent post</h1>
      </div>
      <div
        class="
          flex flex-col
          justify-between
          w-full
          h-28
          rounded-md
          shadow-md
          bg-white
          p-2
          mb-2
        "
      >
        <h1 class="text-xs font-semibold">Some Post</h1>
        <p class="text-xs font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo
          eius nisi...
        </p>

        <p class="text-xs text-right w-full font-light">22 hours ago</p>
      </div>
      <div
        class="
          flex flex-col
          justify-between
          w-full
          h-28
          rounded-md
          shadow-md
          bg-white
          p-2
          mb-2
        "
      >
        <h1 class="text-xs font-semibold">Some Post</h1>
        <p class="text-xs font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo
          eius nisi...
        </p>

        <p class="text-xs text-right w-full font-light">22 hours ago</p>
      </div>
      <div
        class="
          flex flex-col
          justify-between
          w-full
          h-28
          rounded-md
          shadow-md
          bg-white
          p-2
          mb-2
        "
      >
        <h1 class="text-xs font-semibold">Some Post</h1>
        <p class="text-xs font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo
          eius nisi...
        </p>

        <p class="text-xs text-right w-full font-light">22 hours ago</p>
      </div>
    </div>
  </div>
  <div
    class="
      flex
      w-full
      lg:w-10/12
      text-center
      items-center
      content-center
      justify-center
      mb-20
    "
  >
    <InfiniteLoading @infinite="loadNext" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import Search from "./Search.vue";
import CreatePost from "./CreatePost.vue";

import Post from "./Post.vue";

export default {
  data() {
    return {
      result: "",
    };
  },
  async created() {
    if (this.posts.length <= 0) {
      await this.getPosts();
    }
  },
  mounted() {},
  components: {
    Post,
    InfiniteLoading,
    Search,
    CreatePost,
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
    async loadNext(state) {
      if (this.result === "empty") {
        state.complete();
        return;
      } else if (res === "error") {
        state.error();
        return;
      }
      var res = await this.getPosts();
      this.result = res;
      state.loaded();
    },
  },
};
</script>

<style>
#vue3-infinite-loading > span {
  @apply uppercase text-sm font-semibold;
}
</style>
