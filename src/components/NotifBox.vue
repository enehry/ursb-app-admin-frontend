<template>
  <div
    v-if="isShow"
    class="block border w-full rounded-md mb-2 py-2 px-4"
    :class="bColor"
  >
    <div class="flex items-center gap-x-2">
      <exclamation-icon
        v-if="type === 'warning'"
        class="h-5 w-5 text-yellow-500"
      ></exclamation-icon>
      <x-circle-icon
        v-else-if="type === 'error'"
        class="h-5 w-5 text-red-500"
      ></x-circle-icon>
      <check-circle-icon
        v-else
        class="h-5 w-5 text-green-500"
      ></check-circle-icon>
      <h1 class="uppercase text-xs font-semibold text-secondary">
        {{ title }}
      </h1>
    </div>
    <p class="text-xs text-primary">{{ message }}</p>
  </div>
</template>

<script>
import {
  ExclamationIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/outline";
export default {
  props: {
    isShow: Boolean,
    type: String,
    title: String,
    message: String,
  },
  components: {
    ExclamationIcon,
    CheckCircleIcon,
    XCircleIcon,
  },
  computed: {
    bColor() {
      switch (this.type) {
        case "error":
          return "border-red-500";
        case "warning":
          return "border-yellow-500";
        default:
          return "border-green-500";
      }
    },
  },
};
</script>

<style></style>
