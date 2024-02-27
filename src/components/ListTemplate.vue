<template>
  <n-data-table :columns="columns" :data="data"  :bordered="false" />
</template>

<script setup>
import { h, ref } from "vue";
import { NButton, useMessage } from "naive-ui";

const createColumns = ({
  play
}) => {
  return [
    {
      title: "No",
      key: "no"
    },
    {
      title: "属性名",
      key: "name"
    },
    {
      title: "类型",
      key: "type"
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row)
          },
          { default: () => "Play" }
        );
      }
    }
  ];
};


const data = [
  { no: 3, name: "Wonderwall", type: "4:18" },
  { no: 4, name: "Don't Look Back in Anger", type: "4:48" },
  { no: 12, name: "Champagne Supernova", type: "7:27" }
];

const columns = createColumns({
  play(row) {
    message.info(`Play ${row.title}`);
  }
})
</script>
