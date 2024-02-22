<script setup>
import { inject, computed } from 'vue';
import PaginationCell from './PaginationCell.vue';
import PaginationArrowCell from './PaginationArrowCell.vue';

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
  <div class="px-3 py-2 w-full flex justify-between gap-1 items-center border-t border-solid border-slate-400">
    <div class="inline-flex space-x-1 whitespace-nowrap">
      <span class="text-sm font-medium text-slate-1100"> {{ paginationRange.start }}-{{ paginationRange.end }} </span>
      <span class="text-sm font-normal text-slate-1100">of</span>
      <span class="text-sm font-medium text-slate-1100"> {{ paginationRange.total }} items</span>
    </div>
    <div class="flex flex-row gap-2 items-center justify-center">
      <pagination-arrow-cell
        position="left"
        type="double"
        :disabled="table.getState().pagination.pageIndex === 0"
        @change="table.setPageIndex(0)"
      />
      <pagination-arrow-cell position="left" :disabled="!table.getCanPreviousPage()" @change="table.previousPage()" />

      <div class="flex flex-row gap-2 items-center justify-center">
        <pagination-cell
          v-for="pageIndex in pageNumbers"
          :key="pageIndex"
          :buttonText="pageIndex"
          @click="() => handleClick(pageIndex)"
          :disabled="table.getState().pagination.pageIndex === pageIndex - 1"
        />
      </div>

      <pagination-arrow-cell position="right" :disabled="!table.getCanNextPage()" @change="table.nextPage()" />
      <pagination-arrow-cell
        position="right"
        type="double"
        :disabled="table.getState().pagination.pageIndex === table.getPageCount() - 1"
        @change="table.setPageIndex(table.getPageCount() - 1)"
      />
    </div>
  </div>
</template>
