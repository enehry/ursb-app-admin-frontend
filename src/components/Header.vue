<template>
  <div class="heading mb-4 px-4 sm:p-0">
    <h2 class="text-sm font-bold uppercase text-gray-700">{{ title }}</h2>
    <h6 class="text-xs text-gray-400">{{ description }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style></style>
