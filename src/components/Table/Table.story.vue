<script setup>
import { h } from 'vue';
import Table from './Table.vue';
import UserCard from './components/UserCard.vue';

const agentData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/49.jpg',
    openConversations: 3,
    unattendedConversations: 2,
  },
  {
    id: 2,
    name: 'James franco',
    email: 'franco@gmail.com',
    thumbnail: '',
    openConversations: 5,
    unattendedConversations: 1,
  },
  {
    id: 3,
    name: 'Sara Doe',
    email: 'sarajamesdoe@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/48.jpg',
    openConversations: 4,
    unattendedConversations: 0,
  },
  {
    id: 4,
    name: 'Fernando Doe',
    email: 'fernando@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/50.jpg',
    openConversations: 8,
    unattendedConversations: 10,
  },
  {
    id: 5,
    name: 'Karl Doe',
    email: 'karl@gmail.com',
    thumbnail: '',
    openConversations: 3,
    unattendedConversations: 2,
  },
  {
    id: 6,
    name: 'Alexander Doe',
    email: 'alex@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/52.jpg',
    openConversations: 8,
    unattendedConversations: 2,
  },
  {
    id: 7,
    name: 'Micheal Doe',
    email: 'micheal2312@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/2.jpg',
    openConversations: 3,
    unattendedConversations: 2,
  },
  {
    id: 8,
    name: 'Hannah Doe',
    email: 'hannannaha@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/21.jpg',
    openConversations: 13,
    unattendedConversations: 2,
  },
  {
    id: 9,
    name: 'Gordon Doe',
    email: 'gordonewdow@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/1.jpg',
    openConversations: 3,
    unattendedConversations: 2,
  },
  {
    id: 10,
    name: 'Diamond Doe',
    email: 'gold@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/26.jpg',
    openConversations: 3,
    unattendedConversations: 2,
  },
];

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
      <Table :data="agentData" :columns="agentColumns" />
    </Variant>
  </Story>
</template>
