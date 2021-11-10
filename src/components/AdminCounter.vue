<template>
  <div class="grid content-around xl:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-2">
    <admin-counter-item
      v-for="(counter, index) in counters"
      :key="index"
      :counter="counter"
    >
      <component
        class="text-white h-8 w-8"
        :is="heroIcons[counter.icon]"
      ></component>
    </admin-counter-item>
  </div>
</template>

<script>
import AdminCounterItem from "@/components/AdminCounterItem.vue";
import { mapGetters } from "vuex";
import * as heroIcons from "@heroicons/vue/outline";
export default {
  data() {
    return {
      heroIcons,
    };
  },
  components: {
    AdminCounterItem,
  },
  computed: {
    ...mapGetters(["counters"]),
  },
};
</script>

<style></style>
