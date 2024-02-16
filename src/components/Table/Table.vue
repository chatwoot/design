<script setup>
import { ref, provide } from 'vue';
import { useVueTable, FlexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/vue-table';
import PaginationGroup from './components/PaginationGroup.vue';

const props = defineProps({
  data: Array,
  columns: Array,
  pageSize: {
    type: Number,
    default: 10,
  },
  enablePagination: {
    type: Boolean,
    default: false,
  },
});

const data = ref(props.data);

const table = useVueTable({
  data: data.value,
  columns: props.columns,
  manualPagination: !props.enablePagination,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageSize: props.pageSize,
    },
  },
});

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
          >
            <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
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

      <tfoot v-if="props.enablePagination">
        <tr>
          <td :colspan="props.columns.length" scope="row">
            <pagination-group />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
