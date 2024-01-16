<script setup lang="ts">
defineProps({
  message: { type: String, default: '' },
  action: {
    type: Object,
    default: () => { },
  },
});
</script>
<template>
  <div
    class="shadow-xl text-slate-100 bg-slate-1200 min-h-10 rounded inline-flex max-w-[30rem] min-w-[15rem] px-5 py-3 text-left items-center"
  >
    <div class="text-sm font-medium text-slate-100">
      {{ message }}
    </div>
    <div
      v-if="action"
      class="ml-auto pl-4 text-nowrap text-sm font-medium text-blue-900 cursor-pointer"
    >
      <router-link
        v-if="action.type == 'link'"
        :to="action.to"
      >
        {{ action.message }}
      </router-link>
    </div>
  </div>
</template>
