<script setup>
import SnackbarItem from './SnackbarItem.vue';
</script>
<template>
  <Story title="Snackbar/Item">
    <Variant title="Default Snackbar">
      <SnackbarItem message="Oops! We couldn't find the email address. Please try again." />
    </Variant>
    <Variant title="Snackbar with action">
      <SnackbarItem
        message="Oops! We couldn't find the email address."
        :action="{ type: 'link', to: 'dashboard', message: 'Try again' }"
      />
    </Variant>
  </Story>
</template>
