

<template>
  <el-table :data="store.notes" >

    <el-table-column type="index" label="序号" width="50" />
    <el-table-column prop="name" label="笔记名称" width="250" />
    <el-table-column prop="templateId" label="模板" />
    <el-table-column prop="id" label="索引" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="scope">
                <el-button type="danger" size="small" @click="store.handleDelete(scope)">删除</el-button>
                <el-button  type="primary" size="small" @click="store.handleUpdata(scope)">修改</el-button>
      </template>
    </el-table-column>
    <!--    <el-pagination-->
    <!--        v-model:current-page="currentPage"-->
    <!--        :small="small"-->
    <!--        :disabled="disabled"-->
    <!--        :background="background"-->
    <!--        layout="prev, pager, next, jumper"-->
    <!--        :total="1000"-->
    <!--        @size-change="handleSizeChange"-->
    <!--        @current-change="handleCurrentChange"-->
    <!--    />-->
  </el-table>
</template>
<script setup>
import { useNoteStore } from '@/stores'

const store = useNoteStore()
</script>
<style scoped>

</style>