<template>
  <el-table :data="store.templates" >
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="name" label="模板名称" width="250" />
      <el-table-column prop="attributes" label="拥有属性" />
      <el-table-column prop="parent" label="父模板" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="store.handleDelete(scope)">删除</el-button>
          <el-button link type="primary" size="small" @click="store.handleUpdata(scope)">修改</el-button>
        </template>
      </el-table-column>
  </el-table>
</template>

<script setup>
import { useTemplateStore } from '@/stores'
const store = useTemplateStore()

onMounted(() => {
  store.flash()
})
</script>
