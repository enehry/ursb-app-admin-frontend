<template>
  <div class="bulletin-board uppercase text-sm font-bold mb-4">
    e-Prospectus/{{ this.$route.params.name }}
  </div>

  <div v-if="isLoaded">
    <div v-if="prospectus.length > 0" class="flex flex-col">
      <div class="">
        <button
          class="
            float-right
            bg-red-500
            text-white text-sm
            py-1
            px-3
            uppercase
            rounded-md
            shadow-md
            hover:bg-red-700
          "
          @click.prevent="triggerModal"
        >
          Reset
        </button>
      </div>
      <div v-for="year in prospectus" :key="year.year">
        <div class="">
          <h5 class="pl-2 pt-2 uppercase text-sm font-bold text-gray-900">
            {{ year.name }}
          </h5>

          <div v-for="semester in year.data" :key="semester.semester">
            <h5 class="pl-2 py-2 uppercase text-xs font-bold text-gray-500">
              {{ semester.semester }}
            </h5>
            <prospectus-table-sem
              :subjects="semester.subjects"
            ></prospectus-table-sem>
          </div>
        </div>
      </div>
    </div>
    <div @dragover.prevent @drop.prevent class="flex h-screen" v-else>
      <div @drop="dragFile" class="text-center m-auto">
        <h1 class="text-3xl font-medium uppercase text-gray-800">No Data</h1>
        <p class="text-sm mb-4 text-gray-500">
          You can add new data by clicking the button below
        </p>
        <span class="mb-2" v-if="File[0]"
          >{{ File[0].name }}
          <button class="uppercase text-red-500 ml-2" @click.prevent="clear">
            Remove
          </button></span
        >
        <label
          v-show="!File[0]"
          class="
            m-auto
            w-64
            flex flex-col
            items-center
            px-4
            py-6
            bg-white
            rounded-md
            shadow-md
            tracking-wide
            uppercase
            border border-blue
            cursor-pointer
            hover:bg-green-600 hover:text-white
            text-green-500
            ease-linear
            transition-all
            duration-150
          "
        >
          <upload-icon class="mr-1 w-10 h-10"></upload-icon>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <vee-form refs="prospectusForm">
            <input
              type="file"
              name="file"
              @change="uploadFile"
              class="hidden"
              ref="fileUpload"
            />
          </vee-form>
        </label>
        <label
          disabled
          v-show="File[0]"
          @click.prevent="uploadToDatabase"
          class="
            m-auto
            w-64
            flex flex-col
            items-center
            px-4
            py-6
            bg-white
            rounded-md
            shadow-md
            tracking-wide
            uppercase
            border border-blue
            cursor-pointer
            hover:bg-green-600 hover:text-white
            text-green-500
            ease-linear
            transition-all
            duration-150
          "
        >
          <upload-icon class="mr-1 w-10 h-10"></upload-icon>
          <span class="mt-2 text-base leading-normal">Upload</span>
        </label>
      </div>
    </div>
  </div>
  <div v-if="isUploading" class="opacity-25 fixed inset-0 z-40 bg-black">
    <div class="m-auto h-full w-full flex items-center justify-center">
      <div class="spinner">
        <div
          style="border-top-color: transparent"
          class="
            w-4
            h-4
            border-2 border-white border-solid
            rounded-full
            animate-spin
          "
        ></div>
      </div>
    </div>
  </div>
  <admin-modal :showModal="isWarning">
    <div class="heading flex items-center gap-2">
      <exclamation-icon class="w-5 h-5 text-red-500"></exclamation-icon>
      <h1 class="uppercase text-red-500 font-semibold text-sm">Warning !</h1>
    </div>
    <div>
      <p class="text-xs font-bold">This action cannot be undo!</p>
      <p class="text-xs">
        This will delete all the data in this prospectus, some data may affect
        this action!
      </p>
      <p class="text-xs">Are you sure you want to reset this prospectus ?</p>
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
        @click.prevent="resetData"
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
import { UploadIcon, ExclamationIcon } from "@heroicons/vue/solid";
import ProspectusTableSem from "./ProspectusTableSem";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    UploadIcon,
    ExclamationIcon,
    ProspectusTableSem,
  },
  data() {
    return {
      isLoaded: true,
      isUploading: false,
      File: [],
      isWarning: false,
    };
  },
  async created() {
    this.isLoaded = false;
    await this.getProspectus(this.$route.params.id);
    this.isLoaded = true;
  },
  props: ["id", "name"],
  computed: {
    ...mapGetters(["prospectus"]),
  },
  methods: {
    ...mapActions(["getProspectus", "uploadProspectus", "resetProspectus"]),
    uploadFile(e) {
      this.File = e.target.files;
    },
    dragFile(e) {
      this.File = e.dataTransfer.files;
    },
    clear() {
      this.$refs.fileUpload.value = null;
      this.File = [];
    },
    triggerModal() {
      this.isWarning = true;
    },
    async resetData() {
      await this.resetProspectus(this.$route.params.id);
      this.isWarning = false;
    },
    async uploadToDatabase() {
      if (this.File[0]) {
        const data = new FormData();
        data.append("prospectus", this.File[0]);
        data.append("id", this.$route.params.id);
        this.isUploading = true;
        await this.uploadProspectus(data);
        this.isUploading = false;
      }
    },
  },
};
</script>

<style></style>
