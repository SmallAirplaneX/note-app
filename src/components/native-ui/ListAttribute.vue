<template>

  <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />

</template>


<script setup>
import { h, ref } from "vue";
import { NButton, useMessage } from "naive-ui";
import { getAttributeList } from '@/http/api'
import { onMounted } from 'vue'

const message = useMessage()
const createColumns = ({
  play
}) => {
  return [
    {
      title: "No",
      key: "id"
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
      title: "时间",
      key: "time"
    },
    {
      title: "解释",
      key: "explanation"
    },
    {
      title: "操作",
      key: "actions",
      render(id) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(id)
          },
          { default: () => "删除" }
        );
      }
    }
  ];
};



const data = ref([])




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
