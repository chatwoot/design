<script setup>
import { h } from 'vue';
import Table from './Table.vue';
import UserCard from './components/UserCard.vue';
import agentData from './agentData';

const agentColumns = [
  {
    header: 'Agent',
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
    accessorKey: 'openConversations',
    header: 'Open',
    enableSorting: true,
  },
  {
    accessorKey: 'unattendedConversations',
    header: 'Unattended',
    enableSorting: false,
  },
];
</script>

<template>
  <Story title="Table/UserList" width="100%">
    <Variant title="User list">
      <Table :data="agentData" :columns="agentColumns" :pageSize="3" enableSorting showTableFooter />
    </Variant>
  </Story>
</template>
