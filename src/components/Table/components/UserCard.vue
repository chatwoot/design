<script setup>
defineProps({
  id: Number,
  name: String,
  email: String,
  thumbnail: String,
});
</script>
<template>
  <div :key="id" class="flex items-center gap-3 w-full">
    <img
      v-if="thumbnail"
      class="w-10 h-10 rounded-full border border-solid border-slate-400"
      :src="thumbnail"
      :alt="`${name} profile picture`"
    />
    <div v-else class="w-10 h-10 flex items-center justify-center rounded-full border border-solid border-slate-400">
      <span class="i-lucide-user text-slate-1100 w-5 h-5"></span>
    </div>
    <div class="flex flex-col gap-0.5 items-start">
      <div class="text-sm font-medium text-gray-1200">
        {{ name }}
      </div>
      <div class="text-sm font-normal text-slate-900 whitespace-nowrap w-auto overflow-hidden text-ellipsis">
        {{ email }}
      </div>
    </div>
  </div>
</template>
