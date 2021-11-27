<template>
  <notifications
    group="no_button"
    :duration="3000"
    position="top right"
    :close-on-click="true"
  >
    <template #body="{ item }">
      <div
        class="
          w-full
          flex flex-col
          m-2
          p-4
          bg-white
          shadow-md
          hover:shodow-lg
          rounded-lg
        "
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <trash-icon
              v-if="item.data.type === 'trash'"
              class="w-5 h-5 text-red-500"
            ></trash-icon>
            <x-circle-icon
              v-if="item.data.type === 'error'"
              class="w-5 h-5 text-red-500"
            ></x-circle-icon>
            <check-circle-icon
              v-if="item.data.type === 'success'"
              class="w-5 h-5 text-green-500"
            ></check-circle-icon>
            <div class="flex flex-col ml-3">
              <div class="font-medium text-xs">{{ item.title }}</div>
              <p
                v-if="item.data.message"
                class="text-xs text-gray-600 leading-none mt-1"
              >
                {{ item.data.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
import { TrashIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/vue/solid";
export default {
  components: {
    TrashIcon,
    CheckCircleIcon,
    XCircleIcon,
  },
};
</script>

<style scoped></style>
