<template>
  <notifications
    group="admin-delete"
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
          <button
            v-if="item.data.toggle"
            @click="item.data.toggle"
            class="
              flex-no-shrink
              bg-red-500
              px-2
              py-1
              text-xs
              shadow-sm
              hover:shadow-lg
              tracking-wider
              border-2 border-red-500
              text-white
              rounded-full
            "
          >
            Undo
          </button>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
import { TrashIcon, CheckCircleIcon } from "@heroicons/vue/solid";
export default {
  components: {
    TrashIcon,
    CheckCircleIcon,
  },
};
</script>

<style scoped></style>
