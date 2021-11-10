<template>
  <div class="flex p-12 md:p-8 h-32 w-full items-center bg-white rounded-md">
    <div
      class="
        w-12
        h-12
        flex
        items-center
        justify-center
        bg-green-300
        rounded-full
      "
    >
      <slot></slot>
    </div>
    <div class="block ml-5">
      <h3 class="font-bold text-xl">{{ counter.count }}</h3>
      <h3 class="text-sm text-gray-600">{{ counter.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counter: Object,
  },
};
</script>

<style></style>
