<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  position: {
    type: [String],
    required: true,
    validator: (value) => ['left', 'right'].includes(value),
  },
  type: {
    type: [String],
    validator: (value) => ['double', ''].includes(value),
  },
  disabled: Boolean,
});

const buttonType = props.type === 'double' ? 'double-' : '';
</script>

<template>
  <button
    class="w-7 h-7 p-1 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="disabled"
    @click="$emit('change')"
  >
    <span class="text-slate-1100 w-5 h-5" :class="`i-material-symbols-keyboard-${buttonType}arrow-${position}`" />
  </button>
</template>
