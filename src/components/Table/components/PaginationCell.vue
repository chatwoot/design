<script setup>
import { defineProps } from 'vue';

defineProps({
  buttonText: {
    type: [String, Number],
  },
  disabled: Boolean,
});
</script>

<template>
  <button
    class="border border-slate-400 text-xs font-medium rounded-md w-7 h-6 disabled:cursor-not-allowed"
    :class="[
      disabled ? 'bg-slate-300 text-slate-1200 hover:bg-slate-300' : 'text-slate-1100',
      buttonText !== '...' ? 'hover:bg-slate-200' : '',
    ]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    {{ buttonText }}
  </button>
</template>
