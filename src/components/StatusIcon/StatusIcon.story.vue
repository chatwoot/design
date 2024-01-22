<script setup>
import StatusIcon from './StatusIcon.vue';
</script>

<template>
  <Story title="Conversation/StatusIcon">
    <Variant title="Pending icon">
      <StatusIcon status="pending" />
    </Variant>
    <Variant title="Snoozed icon">
      <StatusIcon status="snoozed" />
    </Variant>
    <Variant title="Open icon">
      <StatusIcon status="open" />
    </Variant>
    <Variant title="Resolved icon">
      <StatusIcon status="resolved" />
    </Variant>
  </Story>
</template>
