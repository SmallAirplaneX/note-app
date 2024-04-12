<template>
  <el-table :data="store.list" >

      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="模板名称" width="250" />
      <el-table-column prop="id" label="索引" />
<!--      <el-table-column prop="attributes" label="拥有属性" >-->
<!--        <template #default="scope">-->
<!--          //检查scope.row下是否包含属性va-->
<!--                  <el-space v-if="scope.row" wrap>-->
<!--                    <el-tag v-for="item in store.list[0].attributes" :key="item.id" type="success" size="small">{{ item.name }}</el-tag>-->
<!--                  </el-space>-->
<!--                  <el-button v-else @click="scope.row.v = true">点我查看</el-button>-->
<!--        </template>-->



<!--      </el-table-column>-->
      <el-table-column prop="parentId" label="父模板" />
      <el-table-column fixed="right" label="操作" width="150">
        <template #default="scope">
          <el-button type="danger" size="small" @click="store.handleDelete(scope)">删除</el-button>
          <el-button  type="primary" size="small" @click="store.handleUpdata(scope)">修改</el-button>
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
</template>

<script setup>
import { useTemplateStore } from '@/stores'
import {storeToRefs} from "pinia";

const store = useTemplateStore()

const { handleSizeChange,handleCurrentChange } = store
const { currentPage } = storeToRefs(store)



onMounted(() => {
  store.flash()
})
</script>
