<script setup>
import PriorityIcon from './PriorityIcon.vue';
</script>

<template>
  <Story title="Conversation/PriorityIcon">
    <Variant title="urgent icon">
      <PriorityIcon priority="urgent" />
    </Variant>
    <Variant title="high icon">
      <PriorityIcon priority="high" />
    </Variant>
    <Variant title="medium icon">
      <PriorityIcon priority="medium" />
    </Variant>
    <Variant title="low icon">
      <PriorityIcon priority="low" />
    </Variant>
  </Story>
</template>