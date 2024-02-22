<script setup>
import { onMounted, h, computed, reactive } from 'vue';
import { fromUnixTime, formatDistanceToNow } from 'date-fns';
import Table from './Table.vue';
import UserCard from './components/UserCard.vue';
import contactDataJson from './contactData';

const PAGE_SIZE = 3;

const state = reactive({
  payload: [],
  meta: {
    count: 14,
    currentPage: 1,
  },
});

const fetchData = (page, limit = PAGE_SIZE) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = contactDataJson.slice(startIndex, endIndex);

  state.payload = [...paginatedItems];
  state.meta.currentPage = page;
};

const currentPage = computed({
  get: () => state.meta.currentPage,
  set: (newValue) => {
    state.meta.currentPage = newValue;
  },
});

const totalPages = computed({
  get: () => Math.ceil(state.meta.count / PAGE_SIZE),
  set: (newValue) => {
    state.meta.count = newValue;
  },
});

const totalCount = computed({
  get: () => state.meta.count,
  set: (newValue) => {
    state.meta.count = newValue;
  },
});

const goToPage = (page) => {
  fetchData(page);
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1);
  }
};

const goToPrevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

onMounted(() => {
  fetchData(currentPage.value);
});

const convertTimestamp = (timestamp) => {
  const date = fromUnixTime(timestamp);
  return formatDistanceToNow(date, { addSuffix: true });
};

const contactColumns = [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }) =>
      h(UserCard, {
        id: row.original.id,
        name: row.original.name,
        email: row.original.email,
        thumbnail: row.original.thumbnail,
      }),
    enableSorting: true,
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone number',
    enableSorting: false,
  },
  {
    accessorKey: 'lastActivityAt',
    header: 'Last activity',
    enableSorting: true,
    cell: (time) => convertTimestamp(time.getValue()),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    enableSorting: true,
    cell: (time) => convertTimestamp(time.getValue()),
  },
];
</script>

<template>
  <Story title="Table/ContactList" width="100%">
    <Variant title="Contact list">
      <Table
        :key="`table-page-${currentPage}`"
        :data="state.payload"
        :columns="contactColumns"
        :current-page="currentPage"
        :total-pages="totalPages"
        :total-count="totalCount"
        :pageSize="PAGE_SIZE"
        enableManualPagination
        showTableFooter
        enableSorting
        @goToPrevPage="goToPrevPage"
        @goToNextPage="goToNextPage"
        @goToFirstPage="() => goToPage(1)"
        @goToLastPage="() => goToPage(totalPages)"
      />
    </Variant>
  </Story>
</template>
