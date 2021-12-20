<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-md font-medium leading-6 text-gray-900">
            Deans List
          </h3>
          <p class="mt-1 text-xs text-gray-600">
            You can change minimum grades to be considered for Deans List.
          </p>
        </div>
      </div>
      <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="bg-white flex flex-col text-left px-8 py-4">
            <div class="flex items-center justify-between gap-2">
              <div>
                <label class="text-xs text-gray-400" for="">
                  Input Minimum grade to be considered for Deans List
                </label>
              </div>
              <input
                class="
                  bg-gray-100
                  outline-none
                  p-2
                  font-medium
                  text-sm text-gray-500
                  rounded-md
                "
                type="text"
                placeholder="Minimum Grade"
                value="1.9"
              />
            </div>
            <div class="mt-2 flex items-center justify-between gap-2">
              <div>
                <label class="text-xs text-gray-400" for="">
                  Input Minimum QPA to be considered for Deans List
                </label>
              </div>
              <input
                class="
                  bg-gray-100
                  outline-none
                  p-2
                  font-medium
                  text-sm text-gray-500
                  rounded-md
                "
                type="text"
                placeholder="Minimum Grade"
                value="1.69"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
