<template>
  <div class="bulletin-board uppercase text-sm font-bold mb-8">
    Bulletin Board
  </div>
  <div class="lg:flex block">
    <div class="block w-full lg:mr-4">
      <!--- POSTS LIST -->
      <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>

    <div class="w-full lg:w-1/4">
      <div class="heading p-4 bg-white mb-3 shadow-md rounded-md">
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Post from "./Post.vue";

export default {
  async created() {
    await this.getPosts();
    console.log(this.posts);
    console.log("create");
  },
  components: {
    Post,
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
};
</script>

<style></style>
