<template>
  <el-table :data="store.templates" @selection-change="handleSelectionChange" >
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="name" label="模板名称" width="250" />
      <el-table-column prop="time" label="创建时间" width="90"/>
      <el-table-column prop="parent" label="父模板" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >删除</el-button
          >
          <el-button link type="primary" size="small">修改</el-button>
        </template>
      </el-table-column>
  </el-table>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()


const handleSelectionChange = (selection)=>{
    // 打印当前选中的行数据
    selected.value = selection
  }
const handleClick = () => {
  message.info("删除")
}

onMounted(() => {
  store.getTemplates()
})
</script>
