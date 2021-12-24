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
        <vee-form
          :validation-schema="minGradeQpaSchema"
          @submit="save"
          :initial-values="qpa_grade"
          class="shadow overflow-hidden sm:rounded-md"
        >
          <div class="bg-white flex flex-col text-left px-8 py-4">
            <div class="flex items-center justify-between gap-2">
              <div>
                <label class="text-xs text-gray-400" for="">
                  Input Minimum grade to be considered for Deans List
                </label>
              </div>
              <vee-field
                name="min_grade"
                class="
                  bg-gray-100
                  outline-none
                  p-2
                  font-medium
                  text-sm text-gray-500
                  rounded-md
                "
                type="number"
                placeholder="Minimum Grade"
                step="0.01"
              />
            </div>
            <ErrorMessage class="text-red-600 text-xs" name="min_grade" />
            <div class="mt-2 flex items-center justify-between gap-2">
              <div>
                <label class="text-xs text-gray-400" for="">
                  Input Minimum QPA to be considered for Deans List
                </label>
              </div>
              <vee-field
                name="min_qpa"
                class="
                  bg-gray-100
                  outline-none
                  p-2
                  font-medium
                  text-sm text-gray-500
                  rounded-md
                "
                type="number"
                placeholder="Minimum Grade"
                step="0.01"
              />
            </div>
            <ErrorMessage class="text-red-600 text-xs" name="min_qpa" />
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                py-2
                px-4
                shadow-sm
                text-xs
                font-medium
                rounded-full
                text-white
                bg-gray-800
                hover:bg-gray-600
              "
            >
              Save
            </button>
          </div>
        </vee-form>
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
import { mapActions, mapGetters } from "vuex";
export default {
  async created() {
    await this.getMinGradeQpa();
    this.qpa_grade.min_qpa = this.minGradeQpa.min_qpa.value;
    this.qpa_grade.min_grade = this.minGradeQpa.min_grade.value;
  },
  data() {
    return {
      qpa_grade: {
        min_qpa: 0,
        min_grade: 0,
      },
      minGradeQpaSchema: {
        min_grade: "required|min:1|max:4|max_value:5|min_value:1",
        min_qpa: "required|min:1|max:4|max_value:5|min_value:1",
      },
    };
  },
  computed: {
    ...mapGetters(["minGradeQpa"]),
  },
  methods: {
    ...mapActions(["saveMinGradeQpa", "getMinGradeQpa"]),
    save(values) {
      this.saveMinGradeQpa(values);
    },
  },
};
</script>

<style></style>
