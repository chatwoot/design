<template>
  <div
    class="inline-flex items-center p-1 h-5 leading-4 text-xs font-medium bg-none rounded-lg whitespace-nowrap border border-solid border-slate-600"
  >
    <span class="text-slate-1100 shrink-0" :class="inboxIcon" />
    <span class="text-ellipsis hidden sr-only">{{ inbox.name }}</span>
  </div>
</template>
<script setup>
import { computed, defineProps } from 'vue';
import { getChannelIconByType } from '../../helpers/inbox';

const props = defineProps({
  inbox: {
    type: Object,
    default: () => {},
  },
});

const inboxIcon = computed(() => {
  const { phone_number: phoneNumber, channel_type: type } = props.inbox;
  const classByType = getChannelIconByType(type, phoneNumber);
  return classByType;
});
</script>
