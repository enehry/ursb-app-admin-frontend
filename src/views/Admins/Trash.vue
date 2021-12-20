<template>
  <button
    @click="toggleModal()"
    class="
      flex
      justify-center
      items-center
      bg-red-500
      rounded-md
      hover:bg-red-600
      px-2
      py-1
    "
  >
    <trash-icon class="h-3 text-white"></trash-icon>
    <span class="text-white text-xs">Trash</span>
  </button>
  <admin-modal :showModal="isShow">
    <div class="">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <trash-icon class="w-6 h-6 text-gray-900"></trash-icon>
          <h2 class="heading uppercase text-gray-900 text-sm font-bold">
            Admin Trash
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
        <h1 class="text-sm font-medium mb-2 block">Names</h1>

        <div class="w-80 block mt-4 divide-y">
          <div v-if="adminTrash.length > 0">
            <div
              v-for="trash in adminTrash"
              :key="trash.id"
              class="my-2 w-full flex justify-between items-center"
            >
              <div class="flex items-center">
                <img
                  v-if="trash.avatar"
                  class="
                    mr-2
                    object-center object-cover
                    border-2 border-gray-500
                    rounded-full
                    h-8
                    w-8
                  "
                  :src="`${this.$baseURL}${trash.avatar}`"
                />
                <img
                  v-else
                  class="
                    mr-2
                    object-center object-cover
                    border-2 border-gray-500
                    rounded-full
                    h-8
                    w-8
                  "
                  :src="`https://avatars.dicebear.com/api/initials/${trash.fname}.svg?background=%23bcbcbc`"
                />
                <div class="block">
                  <h3 class="text-sm">{{ trash.fname }}</h3>
                  <p class="text-xs">
                    {{ trash.college.abbr }} •
                    {{ trash.course ? trash.course.abbr : " " }}
                  </p>
                </div>
              </div>
              <div class="flex gap-2">
                <button @click.prevent="toggleDelete(trash.id)">
                  <trash-icon class="w-5 h-5 text-red-500"></trash-icon>
                </button>
                <button @click.prevent="restore(trash)">
                  <refresh-icon class="w-5 h-5 text-green-500"></refresh-icon>
                </button>
              </div>
            </div>
          </div>
          <div
            v-else
            class="flex items-center my-4 w-full justify-center gap-2"
          >
            <information-circle-icon
              class="h-5 w-5 text-green-500"
            ></information-circle-icon>
            <h1 class="text-xs font-medium">Empty Trash</h1>
          </div>
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
        Are you sure you want to permanent delete this admin ?
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
        @click.prevent="deletePemanent()"
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
  TrashIcon,
  RefreshIcon,
  InformationCircleIcon,
  ExclamationIcon,
} from "@heroicons/vue/solid";
import AdminModal from "@/components/AdminModal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TrashIcon,
    AdminModal,
    RefreshIcon,
    InformationCircleIcon,
    ExclamationIcon,
  },
  name: "TrashModal",
  async created() {
    await this.getAdminTrash();
  },
  data() {
    return {
      isShow: false,
      isWarning: false,
      adminId: null,
    };
  },
  computed: {
    ...mapGetters(["adminTrash"]),
  },
  methods: {
    ...mapActions(["getAdminTrash", "restoreAdmin", "deleteAdmin"]),
    toggleModal() {
      this.isShow = !this.isShow;
    },
    restore(admin) {
      this.restoreAdmin(admin);
    },
    toggleDelete(id) {
      this.isWarning = true;
      this.adminId = id;
      // this.deleteAdmin(id);
    },
    deletePemanent() {
      this.deleteAdmin(this.adminId);
      this.isWarning = false;
    },
  },
};
</script>

<style></style>
