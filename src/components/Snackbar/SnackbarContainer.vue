<script setup lang="ts">
import emitter from '@/helpers/eventBus';
import SnackbarItem from './SnackbarItem.vue';
import { onMounted, onUnmounted, reactive } from 'vue';
import { TOAST_MESSAGE_CREATED, type ToastMessage } from './utils';

const props = defineProps({
  duration: {
    type: Number,
    default: 2500,
  },
});

const toastMessages: ToastMessage[] = reactive([]);

const onToastMessageCreated = (event: any): void => {
  toastMessages.push({
    key: new Date().getTime(),
    message: event.message,
    action: event.action,
  });
  window.setTimeout(() => {
    toastMessages.splice(0, 1);
  }, props.duration);
};

onMounted(() => {
  emitter.on(TOAST_MESSAGE_CREATED, onToastMessageCreated);
});

onUnmounted(() => {
  emitter.off(TOAST_MESSAGE_CREATED, onToastMessageCreated);
});
</script>

<style>
.toast-fade-enter-active {
  transition: all 0.3s var(--ease-in-sine);
}

.toast-fade-leave-active {
  transition: all 0.1s var(--ease-out-sine);
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

<template>
  <transition-group
    name="toast-fade"
    tag="div"
    class="rtl:left-4 ltr:right-4 bottom-4 mx-auto inline-flex flex-col overflow-hidden absolute text-center space-y-4 z-50"
  >
    <snackbar-item
      v-for="toast in toastMessages"
      :key="toast.key"
      :message="toast.message"
      :action="toast.action"
    />
  </transition-group>
</template>
