<template>

  <el-tabs style="padding: 10px" v-model="store.activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="编辑" name="first"><ObjectFrom /></el-tab-pane>
    <el-tab-pane label="列表" name="second"><ObjectTable /></el-tab-pane>
  </el-tabs>


</template>

<script setup>
import ObjectFrom from "@/components/ObjectFrom.vue";
import ObjectTable from "@/components/ObjectTable.vue";
import { useObjectStore } from "@/stores/index.js";

const store = useObjectStore();
const handleClick = (tab, event) => {
  console.log(tab, event)
}

</script>


<style scoped>


</style>