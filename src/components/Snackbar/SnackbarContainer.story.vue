<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import SnackbarContainer from './SnackbarContainer.vue';
import { createToast } from './utils';

let alertMessageTimer: number;

onMounted(() => {
  alertMessageTimer = setInterval(() => {
    createToast(`Message ${new Date().getTime()}`);
  }, 3000);
});

onUnmounted(() => {
  clearInterval(alertMessageTimer);
});
</script>
<template>
  <Story title="Snackbar/Container">
    <Variant title="Default Container">
      <SnackbarContainer :duration="2500" />
    </Variant>
  </Story>
</template>
