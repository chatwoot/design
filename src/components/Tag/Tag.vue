<script lang="ts" setup>
import { computed, defineProps, defineEmits, useSlots } from 'vue';
import type { TagProps } from './types';

const props = withDefaults(defineProps<TagProps>(), {
  size: 'm',
  style: 'outlined',
  disabled: false,
  clickable: false,
  removable: false,
});

const slots = useSlots();
const hasContent = computed(() => !!slots.default);
const hasSymbol = computed(() => !!props.icon || !!props.color);
const hasAction = computed(() => props.removable || props.expandable);

// Variants
const isTextOnly = computed(() => !hasSymbol.value && !hasAction.value && hasContent.value);
const isSymbolText = computed(() => hasSymbol.value && hasContent.value && !hasAction.value);
const isActionOnly = computed(() => !hasSymbol.value && !hasContent.value && hasAction.value);
const isTextAction = computed(() => !hasSymbol.value && hasContent.value && hasAction.value);

const containerClasses = computed(() => {
  let classes = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-0.5',
    'outline',
    'outline-1',
    'outline-solid',
    'outline-offset-[-1px]',
  ];

  // Size-specific and content-specific classes
  if (props.size === 's') {
    classes.push('text-xs', 'h-5', 'min-w-[20px]', 'p-0.5', 'rounded');
    if (isSymbolText.value) {
      classes.push('pr-1');
    } else if (isTextAction.value) {
      classes.push('pl-1');
    } else if (isTextOnly.value) {
      classes.push('px-1');
    }
  } else if (props.size === 'm') {
    classes.push('text-sm', 'h-6', 'min-w-[24px]', 'leading-4', 'p-1', 'rounded-md');
    if (isSymbolText.value) {
      classes.push('pr-2');
    } else if (isTextAction.value) {
      classes.push('pl-2');
    } else if (isTextOnly.value) {
      classes.push('px-2');
    }
  }

  // Style-specific classes
  if (props.style === 'ghost') {
    classes.push('outline-transparent');
  } else if (props.style === 'outlined') {
    classes.push('outline-slate-500');
  }

  // Other dynamic classes
  if (props.disabled) {
    classes.push('opacity-50');
  }
  if (props.clickable && !props.disabled) {
    classes.push('cursor-pointer', 'hover:bg-slate-300', 'outline-slate-300');
  }

  return classes.join(' ');
});

const actionClasses = computed(() => {
  let classes = ['w-[14px]', 'h-[14px]', 'inline-flex', 'justify-center', 'items-center', 'rounded'];
  if (!props.disabled) {
    classes.push('hover:bg-slate-400');
  } else {
    classes.push('cursor-default');
  }
  return classes.join(' ');
});

const symbolClasses = computed(() => {
  let classes = ['inline-block'];

  if (props.size === 's') {
    classes.push('w-[14px]', 'h-[14px]');
  } else {
    classes.push('w-4', 'h-4');
  }
  return classes.join(' ');
});

const actionIcon = computed(() =>
  props.removable ? 'i-fluent-dismiss-12-regular' : 'i-fluent-chevron-down-12-regular'
);

const emits = defineEmits(['action', 'click']);

const onClick = (event: MouseEvent) => {
  event.stopPropagation();
  if (props.clickable && !props.disabled) {
    emits('click');
  }
};

const onAction = (event: MouseEvent) => {
  event.stopPropagation();
  if (!props.disabled) {
    emits('action');
  }
};
</script>

<template>
  <div :class="containerClasses">
    <button
      v-if="!isActionOnly"
      class="inline-flex items-center justify-center gap-0.5 text-slate-1100 cursor-default"
      @click="onClick"
    >
      <span
        v-if="props.color"
        :class="symbolClasses"
        class="border-[3px] border-white rounded-md"
        :style="{ background: props.color }"
      ></span>
      <span v-else-if="props.icon" class="" :class="[symbolClasses, props.icon]"></span>
      <slot></slot>
    </button>
    <button v-if="hasAction" :class="actionClasses" @click="onAction">
      <span :class="actionIcon"></span>
    </button>
  </div>
</template>
