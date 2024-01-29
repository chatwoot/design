<script lang="ts" setup>
import { computed } from 'vue';
import type { BadgeProps } from './types';
import useColors from './useColors';

const props = withDefaults(defineProps<BadgeProps>(), {
  size: 'medium',
  variant: 'status',
  color: 'primary',
  disabled: false,
});

const classesToApply = computed(() => {
  return useColors({
    color: props.color,
  });
});
</script>

<template>
  <span
    class="inline-flex items-center justify-center"
    :class="{
      'px-2 py-0.5 text-xs leading-4 h-5 min-w-[1.25rem] rounded': size === 'medium',
      'px-1 text-xs leading-4 h-4 min-w-[1rem] rounded-sm': size === 'small',
      'rounded-xl': variant === 'count',
      [classesToApply]: !disabled,
      'bg-slate-300 text-slate-800': disabled,
    }"
    :aria-label="text"
  >
    <slot>
      {{ text }}
    </slot>
  </span>
</template>
