<script setup>
import { CONVERSATION_PRIORITY } from '../../constants/conversation';
import { defineProps } from 'vue';

const props = defineProps({
  priority: {
    type: String,
    default: '',
  },
});

const PRIORITY = CONVERSATION_PRIORITY;
</script>

<template>
  <div class="inline-flex items-center justify-center rounded-md">
    <svg
      v-if="props.priority === PRIORITY.HIGH"
      class="h-6 w-6"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#FFC291" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#FFC291" />
      <rect x="16" y="4" width="4" height="16" rx="1" fill="#FFC291" />
    </svg>
    <svg
      v-if="props.priority === PRIORITY.LOW"
      class="h-6 w-6"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#FFC291" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#DDDDDD" />
      <rect x="16" y="4" width="4" height="16" rx="1" fill="#DDDDDD" />
    </svg>

    <svg
      v-if="props.priority === PRIORITY.MEDIUM"
      class="h-6 w-6"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#FFC291" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#FFC291" />
      <rect x="16" y="4" width="4" height="16" rx="1" fill="#DDDDDD" />
    </svg>

    <svg
      v-if="props.priority === PRIORITY.URGENT"
      class="h-6 w-6"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#E5484D" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#E5484D" />
      <rect x="16" y="4" width="4" height="16" rx="1" fill="#E5484D" />
    </svg>
  </div>
</template>
