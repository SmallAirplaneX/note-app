<script setup>
import { ref } from 'vue';

const title = ref('未命名')
const template =ref('')

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
<template>
    <n-flex>
<!-- 模板名称 -->
<n-input placeholder="模板名称" :v-bind="title" autosize maxlength="20" style="min-width: 6rem" />
<!-- 模板名称 -->
<n-select 
      label-field="whateverLabel"
      value-field="whateverValue"
      placeholder="请选择模板"
      children-field="whateverChildren"
      filterable
      :options="options"
      style="width: 20rem;"
      :v-bind="template"
    >
    <template #action>
        <n-button>新建一个模板</n-button>
    </template>
</n-select>
</n-flex>




</template>