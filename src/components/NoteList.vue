<script setup >
import {useNoteStore} from "@/stores/components/Note.js";
import {storeToRefs} from "pinia";

const store = useNoteStore()
const { handleDelete, handleUpdata,handleSizeChange,handleCurrentChange} = useNoteStore()
const { tableData ,currentPage} = storeToRefs(store)
</script >

<template >
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" label="序号" width="60" />
    <el-table-column prop="name" label="笔记名称" width="180" />
    <el-table-column prop="id" label="索引" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="scope">
        <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        <el-button  type="primary" size="small" @click="handleUpdata(scope)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      v-model:current-page="currentPage"
      :background="true"
      layout="prev, pager, next, jumper"
      :page-count="Math.ceil(store.count / 15)"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</template >



<style scoped >

</style >