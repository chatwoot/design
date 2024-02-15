<script setup>
import { h } from 'vue';
import Table from './Table.vue';
import AgentSection from './components/AgentSection.vue';

const agentData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/49.jpg',
    open_conversations: 3,
    unattended_conversations: 2,
  },
  {
    id: 2,
    name: 'James franco',
    email: 'franco@gmail.com',
    thumbnail: '',
    open_conversations: 5,
    unattended_conversations: 1,
  },
  {
    id: 3,
    name: 'Sara Doe',
    email: 'sarajamesdoe@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/48.jpg',
    open_conversations: 4,
    unattended_conversations: 0,
  },
  {
    id: 4,
    name: 'Fernando Doe',
    email: 'fernando@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/50.jpg',
    open_conversations: 8,
    unattended_conversations: 10,
  },
  {
    id: 5,
    name: 'Karl Doe',
    email: 'karl@gmail.com',
    thumbnail: '',
    open_conversations: 3,
    unattended_conversations: 2,
  },
  {
    id: 6,
    name: 'Alexander Doe',
    email: 'alex@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/52.jpg',
    open_conversations: 8,
    unattended_conversations: 2,
  },
  {
    id: 7,
    name: 'Micheal Doe',
    email: 'micheal2312@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/2.jpg',
    open_conversations: 3,
    unattended_conversations: 2,
  },
  {
    id: 8,
    name: 'Hannah Doe',
    email: 'hannannaha@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/21.jpg',
    open_conversations: 13,
    unattended_conversations: 2,
  },
  {
    id: 9,
    name: 'Gordon Doe',
    email: 'gordonewdow@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/1.jpg',
    open_conversations: 3,
    unattended_conversations: 2,
  },
  {
    id: 10,
    name: 'Diamond Doe',
    email: 'gold@gmail.com',
    thumbnail: 'https://randomuser.me/api/portraits/men/26.jpg',
    open_conversations: 3,
    unattended_conversations: 2,
  },
];

const agentColumns = [
  {
    header: 'Agent',
    cell: ({ row }) =>
      h(AgentSection, {
        name: row.original.name,
        email: row.original.email,
        thumbnail: row.original.thumbnail,
      }),
  },
  {
    accessorKey: 'open_conversations',
    header: 'Open',
  },
  {
    accessorKey: 'unattended_conversations',
    header: 'Unattended',
  },
];
</script>

<template>
  <Story title="Table/AgentTable" width="100%">
    <Variant title="AgentTable">
      <Table :data="agentData" :columns="agentColumns" />
    </Variant>
  </Story>
</template>
