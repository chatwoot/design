<script setup>
import { computed } from 'vue';
const props = defineProps({
  sortDirection: {
    type: [String, Boolean],
  },
});

const isAsc = computed(() => props.sortDirection === 'asc');
const isDesc = computed(() => props.sortDirection === 'desc');
const isNeither = computed(() => !isAsc.value && !isDesc.value);
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <span
      class="i-fluent-chevron-up-12-filled w-3 h-3 relative top-0.5"
      :class="{
        'text-slate-1100': isAsc || isNeither,
        'text-slate-800': isDesc,
      }"
    />
    <span
      class="i-fluent-chevron-down-12-filled w-3 h-3 relative bottom-0.5"
      :class="{
        'text-slate-1100': isDesc || isNeither,
        'text-slate-800': isAsc,
      }"
    />
  </div>
</template>
