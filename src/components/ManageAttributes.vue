<script setup>
import { h, ref } from "vue";
import { NButton, useMessage } from "naive-ui";
import { getAttributeList } from '@/http/api'
import { onMounted } from 'vue'




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
      title: "解释",
      key: "explanation"
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



const data = ref([
  { no: 3, name: "Wonderwall", type: "4:18", explanation: '456' },
  { no: 4, name: "Don't Look Back in Anger", type: "4:48", explanation: '456' },
  { no: 12, name: "Champagne Supernova", type: "7:27", explanation: '456' }
])

onMounted(() => {
  getAttributeList().then(res => {
      data.value = data.value.concat(res.data)
  })
})

const columns = createColumns({
  play(row) {
    message.info(`Play ${row.title}`);
  }
})

const pagination = ref(false)

</script>
<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
</template>