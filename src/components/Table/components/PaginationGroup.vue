<script setup>
import { inject, computed } from 'vue';
import PaginationCell from './PaginationCell.vue';

const table = inject('table');

const pageNumbers = computed(() => {
  const pageIndex = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();

  // Case 1: All pages can be displayed without truncation.
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  // Case 2: Current page is among the first four. Always show first 5 and last page.
  if (pageIndex <= 4) {
    return [1, 2, 3, 4, 5, '...', pageCount]; // Early pages + last page.
  }

  // Case 3: Current page is among the last four. Show first and last 5 pages.
  if (pageIndex >= pageCount - 3) {
    return [1, '...', ...Array.from({ length: 5 }, (_, i) => pageCount - 4 + i)];
  }

  // Case 4: Current page is in the middle. Show first, last, and 3 pages around current.
  return [1, '...', pageIndex - 1, pageIndex, pageIndex + 1, '...', pageCount];
});

const paginationRange = computed(() => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const rowCount = table.getFilteredRowModel().rows.length;

  return {
    start: pageIndex * pageSize + 1,
    end: Math.min((pageIndex + 1) * pageSize, rowCount),
    total: rowCount,
  };
});

const handleClick = (pageIndex) => {
  if (!isNaN(pageIndex) && pageIndex !== '...') {
    table.setPageIndex(pageIndex - 1);
  }
};
</script>

<template>
  <div class="px-3 py-2 w-full flex justify-between items-center border-t border-solid border-slate-400">
    <div class="inline-flex space-x-2">
      <span class="text-sm font-medium text-slate-1100"> {{ paginationRange.start }}-{{ paginationRange.end }} </span>
      <span class="text-sm font-normal text-slate-1100">of</span>
      <span class="text-sm font-medium text-slate-1100"> {{ paginationRange.total }} items</span>
    </div>
    <div class="flex flex-row gap-2 items-center justify-center">
      <button
        class="w-7 h-7 p-1 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(0)"
        :disabled="table.getState().pagination.pageIndex === 0"
      >
        <span class="i-material-symbols-keyboard-double-arrow-left text-slate-1100 w-5 h-5" />
      </button>
      <button
        class="w-7 h-7 p-1 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.previousPage()"
        :disabled="!table.getCanPreviousPage()"
      >
        <span class="i-material-symbols-keyboard-arrow-left text-slate-1100 w-5 h-5" />
      </button>

      <div class="flex flex-row gap-2 items-center justify-center">
        <pagination-cell
          v-for="pageIndex in pageNumbers"
          :key="pageIndex"
          :buttonText="pageIndex"
          @click="() => handleClick(pageIndex)"
          :disabled="table.getState().pagination.pageIndex === pageIndex - 1"
        />
      </div>

      <button
        class="w-7 h-7 p-1 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.nextPage()"
        :disabled="!table.getCanNextPage()"
      >
        <span class="i-material-symbols-keyboard-arrow-right text-slate-1100 w-5 h-5" />
      </button>
      <button
        class="w-7 h-7 p-1 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(table.getPageCount() - 1)"
        :disabled="table.getState().pagination.pageIndex === table.getPageCount() - 1"
      >
        <span class="i-material-symbols-keyboard-double-arrow-right text-slate-1100 w-5 h-5" />
      </button>
    </div>
  </div>
</template>
