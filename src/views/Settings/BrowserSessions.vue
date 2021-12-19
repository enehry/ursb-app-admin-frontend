<template>
  <div class="mt-10 sm:mt-0 mb-4">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-md font-medium leading-6 text-gray-900">
            Browser Sessions
          </h3>
          <p class="mt-1 text-xs text-gray-600">
            Manage and log out your active sessions on other browsers and
            devices.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="bg-white text-left p-6">
            <div class="note text-xs text-gray-600">
              If necessary, you may log out of all of your other browser
              sessions across all of your devices. Some of your recent sessions
              are listed below; however, this list may not be exhaustive. If you
              feel your account has been compromised, you should also update
              your password.
            </div>
            <div class="browser-sessions flex flex-col mt-2">
              <ul class="list-none">
                <li
                  v-for="session in browserSessions"
                  :key="session.id"
                  class="p-1"
                >
                  <div class="flex flex-row">
                    <desktop-computer-icon
                      class="w-10 h-10 text-gray-700"
                    ></desktop-computer-icon>
                    <div class="information flex flex-col ml-2">
                      <h1 class="text-sm text-gray-900 font-medium">
                        {{ session.name }}
                      </h1>
                      <p class="text-xs text-gray-500">
                        Last active - {{ convert(session.last_used_at) }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="actions">
                <button
                  class="
                    bg-gray-800
                    text-xs
                    font-medium
                    px-4
                    m-2
                    py-2
                    text-white
                    rounded-full
                    hover:bg-gray-600
                  "
                  @click="logoutAll"
                >
                  Logout all session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { DesktopComputerIcon } from "@heroicons/vue/outline";
import timeAgo from "../../includes/timeAgo";
export default {
  components: { DesktopComputerIcon },
  created() {
    this.getAllBrowserSessions();
  },
  computed: {
    ...mapGetters(["browserSessions"]),
  },
  methods: {
    ...mapActions(["getAllBrowserSessions", "logoutAllBrowserSessions"]),
    convert(date) {
      // Create formatter (English).
      var temp = new Date(date);
      return timeAgo.format(temp, "round");
    },
    logoutAll() {
      this.logoutAllBrowserSessions();
    },
  },
};
</script>

<style></style>
