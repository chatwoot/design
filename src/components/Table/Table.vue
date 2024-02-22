<script setup>
import { ref, provide, computed, defineProps } from 'vue';
import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/vue-table';
import PaginationGroup from './components/PaginationGroup.vue';
import manualPaginationGroup from './components/ManualPaginationGroup.vue';
import SortIcon from './components/SortIcon.vue';

const props = defineProps({
  data: Array,
  columns: Array,
  currentPage: Number,
  totalPages: Number,
  totalCount: Number,
  pageSize: Number,
  showTableFooter: Boolean,
  enableManualPagination: Boolean,
  enableSorting: Boolean,
});

const sorting = ref([]);

const pageSize = computed(() => props.pageSize || 10);

const tableOptions = computed(() => ({
  get data() {
    return props.data;
  },
  columns: props.columns,
  manualPagination: props.enableManualPagination,
  manualSortBy: !props.enableSorting,
  enableSorting: props.enableSorting,
  getCoreRowModel: getCoreRowModel(),
  // If manual pagination is enabled, the table will use the manual pagination row model.
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  initialState: {
    pagination: {
      pageSize: pageSize.value,
    },
  },
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  onSortingChange: (updateSort) => {
    sorting.value = typeof updateSort === 'function' ? updateSort(sorting.value) : updateSort;
  },
}));

const table = useVueTable(tableOptions.value);

// To use the table instance in child components
provide('table', table);
</script>

<template>
  <div class="p-4">
    <table class="min-w-full rounded-xl border border-solid border-slate-400 border-separate border-spacing-0">
      <thead>
        <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            scope="col"
            class="p-3 ltr:text-left rtl:text-right text-sm font-medium text-slate-1100 bg-slate-100 ltr:first:rounded-tl-xl ltr:last:rounded-tr-xl rtl:first:rounded-tr-xl rtl:last:rounded-tl-xl"
            :class="{ 'cursor-pointer select-none': header.column.getCanSort() }"
            @click="header.column.getToggleSortingHandler()?.($event)"
          >
            <div class="flex flex-row gap-1 items-center">
              <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
              <sort-icon v-if="header.column.getCanSort()" :sortDirection="header.column.getIsSorted()" />
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id" class="hover:bg-slate-200">
          <td
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            scope="row"
            class="p-3 text-sm text-slate-1200 border-t border-solid border-slate-400"
          >
            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
          </td>
        </tr>
      </tbody>

      <tfoot v-if="props.showTableFooter">
        <tr>
          <td :colspan="props.columns.length" scope="row">
            <pagination-group v-if="!props.enableManualPagination" />
            <manual-pagination-group
              v-else
              :currentPage="props.currentPage"
              :totalPages="props.totalPages"
              :totalCount="props.totalCount"
              :pageSize="props.pageSize"
              @goToFirstPage="$emit('goToFirstPage')"
              @goToPrevPage="$emit('goToPrevPage')"
              @goToNextPage="$emit('goToNextPage')"
              @goToLastPage="$emit('goToLastPage')"
            />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
