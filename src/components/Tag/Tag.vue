<script lang="ts" setup>
import { ref, defineProps, defineEmits, useSlots } from 'vue';
import { TagProps } from './types';

const props = withDefaults(defineProps<TagProps>(), {
  size: 'm',
  style: 'outlined',
  disabled: false,
  clickable: false,
  removable: false,
});

const slots = useSlots();
let containerClasses = '';
const hasContent = slots.default;
const hasSymbol = props.icon || props.color;
const hasAction = props.removable || props.expandable;

if (props.size === 's') {
  containerClasses += '  text-xs h-5 min-w-[20px] py-0.5 rounded ';

  // Variant: SYMBOL-TEXT
  if (hasSymbol && hasContent && !hasAction) {
    containerClasses += 'pr-1 ';
  }
  // Variant: TEXT-ACTION
  else if (!hasSymbol && hasContent && hasAction) {
    containerClasses += 'pl-1 ';
  }

  // Variant: TEXT
  if (hasContent) {
    containerClasses += 'px-1 ';
  }
} else if (props.size === 'm') {
  containerClasses += ' text-sm h-6 min-w-[24px] leading-4 p-1 rounded-md ';

  // Variant: SYMBOL-TEXT
  if (hasSymbol && hasContent && !hasAction) {
    containerClasses += 'pr-2 ';
  }
  // Variant: TEXT-ACTION
  else if (!hasSymbol && hasContent && hasAction) {
    containerClasses += 'pl-2 ';
  }
  // Variant: TEXT
  else if (!hasSymbol && hasContent && !hasAction) {
    containerClasses += 'px-2 ';
  }
}
const allStyleClasses = {
  ghost: 'outline-transparent',
  outlined: 'outline-slate-500',
};
const emits = defineEmits(['action', 'click']);
const disabledClasses = props.disabled ? 'opacity-50' : '';
const disabledActionClasses = props.disabled ? 'cursor-default' : 'hover:bg-slate-400';
const clickableClasses = props.clickable ? 'cursor-pointer hover:bg-slate-300 outline-slate-300' : '';
const styleClasses = allStyleClasses[props.style];

const onClick = (event) => {
  event.stopPropagation();
  if (props.clickable && !props.disabled) {
    emits('click');
  }
};

const onAction = (event) => {
  event.stopPropagation();
  if (!props.disabled) {
    emits('action');
  }
};

const actionIcon = props.removable ? 'i-fluent-dismiss-12-regular' : 'i-fluent-chevron-down-12-regular';
</script>

<template>
  <div
    class="inline-flex items-center justify-center gap-0.5 text-slate-1100 outline outline-1 outline-solid outline-offset-[-1px]"
    :class="[containerClasses, styleClasses, clickableClasses, disabledClasses]"
    @click="onClick"
  >
    <span
      v-if="props.color"
      class="w-4 h-4 inline-block border-[3px] border-white rounded-md"
      :style="{ background: props.color }"
    ></span>
    <span v-else-if="props.icon" class="w-4 h-4 inline-block" :class="props.icon"></span>
    <slot></slot>
    <button
      v-if="props.removable || props.expandable"
      class="w-[14px] h-[14px] inline-flex justify-center items-center rounded"
      :class="[disabledActionClasses]"
      @click="onAction"
    >
      <span class="text-xs" :class="actionIcon"></span>
    </button>
  </div>
</template>
