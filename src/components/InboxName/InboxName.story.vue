<script setup>
import InboxName from './InboxName.vue';
</script>
<template>
  <Story title="Conversation/InboxName">
    <Variant title="Facebook inbox">
      <InboxName :inbox="{ channel_type: 'Channel::FacebookPage' }" />
    </Variant>
    <Variant title="Livechat inbox with action">
      <InboxName :inbox="{ channel_type: 'Channel::WebWidget' }" />
    </Variant>
    <Variant title="Telegram inbox with action">
      <InboxName :inbox="{ channel_type: 'Channel::Telegram' }" />
    </Variant>
    <Variant title="Whatsapp inbox with action">
      <InboxName :inbox="{ channel_type: 'Channel::Whatsapp' }" />
    </Variant>
    <Variant title="Api inbox with action">
      <InboxName :inbox="{ channel_type: 'Channel::Api' }" />
    </Variant>
  </Story>
</template>
