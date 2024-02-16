<script setup>
import { h } from 'vue';
import Table from './Table.vue';
import UserCard from './components/UserCard.vue';
import agentData from './agentData';

const agentColumns = [
  {
    header: 'Agent',
    cell: ({ row }) =>
      h(UserCard, {
        name: row.original.name,
        email: row.original.email,
        thumbnail: row.original.thumbnail,
      }),
  },
  {
    accessorKey: 'openConversations',
    header: 'Open',
  },
  {
    accessorKey: 'unattendedConversations',
    header: 'Unattended',
  },
];
</script>

<template>
  <Story title="Table/UserList" width="100%">
    <Variant title="User list">
      <Table :data="agentData" :columns="agentColumns" enablePagination />
    </Variant>
  </Story>
</template>
