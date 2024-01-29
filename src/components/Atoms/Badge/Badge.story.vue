<script lang="ts" setup>
import { reactive } from 'vue';
import Badge from './Badge.vue';

import type { BadgeColors, BadgeProps, BadgeVariants } from './types';

const state = reactive<BadgeProps>({
  text: 'Badge',
  variant: 'status',
  size: 'medium',
  disabled: false
});

const colorOptions: BadgeColors[] = ['primary', 'secondary', 'warning', 'caution' ,'danger', 'success'];

const variantOptions: Record<BadgeVariants, string> = {
  status: 'Status',
  count: 'Count'
};
</script>

<template>
  <Story title="Base Components/Badge" :layout="{ type: 'grid', width: 300 }">
    <template #controls>
      <HstSelect
        v-model="state.size"
        title="Size"
        :options="{
          medium: 'Medium',
          small: 'Small',
        }"
      />
      <HstSelect v-model="state.variant" title="Variant" :options="variantOptions" />
      <HstText v-model="state.text" title="Text" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>

    <div>
      <Variant v-for="color in colorOptions" :title="color" autoPropsDisabled>
        <div class="flex items-center justify-center p-5">
          <Badge v-bind="state" :color="color">
            {{ state.text }}
          </Badge>
        </div>
      </Variant>
    </div>
  </Story>
</template>
