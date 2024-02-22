<script setup>
import { defineProps } from 'vue';

defineProps({
  disabled: Boolean,
});
</script>

<template>
  <button
    class="w-7 h-7 p-1 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="disabled"
    @click="$emit('change')"
  >
    <slot name="icon" />
  </button>
</template>
