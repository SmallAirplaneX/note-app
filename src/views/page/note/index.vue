<template>
  <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
  >
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="JavaScript是什么？" name="first">User</el-tab-pane>
    <el-tab-pane label="学习JavaScript" name="second">Config</el-tab-pane>
  </el-tabs>
  <el-tag>1</el-tag> <el-tag>2</el-tag>
  <MarkdownEdite data="data" />
</template>

<script setup>
import MarkdownEdite from "@/components/MarkdownEdite.vue";
import FigurativeFrom from "@/components/ObjectFrom.vue";

import { ref } from 'vue'
const input = ref('')
</script>

<style scoped></style>