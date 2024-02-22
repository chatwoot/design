<script setup>
import { computed } from 'vue';
import PaginationCell from './PaginationCell.vue';
import PaginationArrowCell from './PaginationArrowCell.vue';

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
  totalCount: Number,
  pageSize: Number,
});

const paginationStart = computed(() => {
  return props.currentPage === 1 ? 1 : (props.currentPage - 1) * props.pageSize + 1;
});

const paginationEnd = computed(() => {
  return props.currentPage === props.totalPages ? props.totalCount : props.currentPage * props.pageSize;
});

const currentPage = computed(() => {
  return props.currentPage;
});

const paginationRange = computed(() => {
  return {
    start: paginationStart.value,
    end: paginationEnd.value,
    total: props.totalCount,
  };
});
</script>

<template>
  <div class="px-3 py-2 w-full flex justify-between gap-1 items-center border-t border-solid border-slate-400">
    <div class="inline-flex gap-1 whitespace-nowrap">
      <span class="text-sm font-medium text-slate-1100"> {{ paginationRange.start }}-{{ paginationRange.end }} </span>
      <span class="text-sm font-normal text-slate-1100">of</span>
      <span class="text-sm font-medium text-slate-1100"> {{ paginationRange.total }} items</span>
    </div>
    <div class="flex flex-row gap-2 items-center justify-center">
      <pagination-arrow-cell
        position="left"
        type="double"
        :disabled="props.currentPage === 1"
        @click="$emit('goToFirstPage')"
      />
      <pagination-arrow-cell position="left" :disabled="props.currentPage === 1" @click="$emit('goToPrevPage')" />

      <div class="flex flex-row gap-2 items-center justify-center">
        <pagination-cell :buttonText="currentPage" />
      </div>

      <pagination-arrow-cell
        position="right"
        :disabled="props.currentPage === props.totalPages"
        @click="$emit('goToNextPage')"
      />
      <pagination-arrow-cell
        position="right"
        type="double"
        :disabled="props.currentPage === props.totalPages"
        @click="$emit('goToLastPage')"
      />
    </div>
  </div>
</template>
