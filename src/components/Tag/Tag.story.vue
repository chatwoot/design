<script setup>
import Tag from './Tag.vue';
</script>

<template>
  <Story title="Conversation/Tag">
    <Variant title="Medium sized TEXT only tag">
      <Tag>hello</Tag>
    </Variant>
    <Variant title="Medium sized SYMBOL-TEXT tag">
      <Tag icon="i-fluent-clock-16-regular">hello</Tag>
    </Variant>
    <Variant title="Medium sized COLOR-TEXT tag">
      <Tag color="red">hello</Tag>
    </Variant>
    <Variant title="Medium sized SYMBOL ONLY tag">
      <Tag icon="i-fluent-clock-16-regular"></Tag>
    </Variant>
    <Variant title="Medium sized ACTION tag">
      <Tag removable></Tag>
    </Variant>
    <Variant title="Medium sized ACTION tag">
      <Tag expandable></Tag>
    </Variant>
    <Variant title="Medium sized TEXT-ACTION tag">
      <Tag expandable disabled>paid customer</Tag>
    </Variant>
    <Variant title="Medium sized SYMBOL-TEXT-ACTION tag">
      <Tag expandable icon="i-fluent-clock-16-regular" clickable>clickable</Tag>
    </Variant>

    <Variant title="Small sized TEXT only tag">
      <Tag size="s">hello</Tag>
    </Variant>
    <Variant title="Small sized SYMBOL-TEXT tag">
      <Tag size="s" icon="i-fluent-clock-16-regular">hello</Tag>
    </Variant>
    <Variant title="Small sized COLOR-TEXT tag">
      <Tag size="s" color="red">hello</Tag>
    </Variant>
    <Variant title="Small sized SYMBOL ONLY tag">
      <Tag size="s" icon="i-fluent-clock-16-regular"></Tag>
    </Variant>
    <Variant title="Small sized ACTION tag">
      <Tag size="s" removable></Tag>
    </Variant>
    <Variant title="Small sized ACTION tag">
      <Tag size="s" expandable></Tag>
    </Variant>
    <Variant title="Small sized TEXT-ACTION tag">
      <Tag size="s" expandable>paid customer</Tag>
    </Variant>
    <Variant title="Small sized SYMBOL-TEXT-ACTION tag">
      <Tag size="s" expandable icon="i-fluent-clock-16-regular">paid customer</Tag>
    </Variant>
    
  </Story>
</template>
