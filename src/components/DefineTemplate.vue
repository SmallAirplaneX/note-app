<template>
  
  <n-flex>
    <n-button @click="showModal = true">
    新建
  </n-button>
  <n-modal v-model:show="showModal" style="height: 800px;">
    <n-card 
      style="width: 1200px;"
      title="创建模板"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button> 引用 </n-button>
      </template>
      <div class="flex-x">
        <n-input placeholder="模板名称" :v-bind="qurie" autosize maxlength="20" style="min-width: 6rem" />
        <n-input>搜索</n-input>
        <n-button>搜索</n-button>
      </div>
      
      <div>已添加属性</div>

      <ListAttribute selection="true"/>

      <template #footer>
        已选择
      </template>
    </n-card>
  </n-modal>
  </n-flex>
</template>



<script setup>
import { ref } from 'vue';
import ListAttribute from './element-ui/ListAttribute.vue';

const title = ref('未命名')
const template = ref('')
const showModal = ref(false)

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const options = [
  {
    type: "group",
    whateverLabel: "Rubber Soul",
    key: "Rubber Soul",
    whateverChildren: [
      {
        whateverLabel: "Everybody's Got Something to Hide Except Me and My Monkey",
        whateverValue: "song0",
        disabled: true
      }
    ]
  },
  {
    type: "group",
    whateverLabel: "Let It Be",
    key: "Let It Be Album",
    whateverChildren: [
      {
        whateverLabel: "Two Of Us",
        whateverValue: "Two Of Us"
      }
    ]
  }
];
</script>
