<template>
  <n-flex>
    <!-- 模板名称 -->
    <n-input placeholder="模板名称" :v-bind="title" autosize maxlength="20" style="min-width: 6rem" />
    <!-- 模板名称 -->
    <n-button> 快速创建 </n-button>
  </n-flex>
</template>



<script setup>
import { ref } from 'vue';

const title = ref('未命名')
const template = ref('')

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
