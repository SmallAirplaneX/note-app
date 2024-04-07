
<template>
  <Layout>
    <template #nav>
      <el-button @click="openForm">新建</el-button>
      <el-dialog v-model="state" title="创建模板" width="900">
        <el-form  :model="form" label-width="120px">
          <el-form-item label="主题名称">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="添加视角">
            <el-select
                v-model="form.perspectiveId"
                multiple
                placeholder="Select"
                style="width: 240px"
            >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="submit">创建</el-button>
            <el-button @click="updata">更新</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </template>
    <template #default>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="name" label="主题名称" width="180" />
        <el-table-column prop="perspective_id" label="视角ID" />
        <el-table-column fixed="right" label="操作" width="150">
          <template #default="scope">
            <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
            <el-button  type="primary" size="small" @click="handleUpdata(scope)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </Layout>

</template>


<script setup>
import { useTopicStore } from '@/stores'
import { storeToRefs } from 'pinia'
import Layout from "@/views/layout/manager/index.vue";
const store = useTopicStore()
const { openForm,submit,updata,handleDelete,handleUpdata } = store
const { tableData,state,form,options } = storeToRefs(store)

onMounted(()=>{
  store.flash()
})
</script>


<style scoped>

</style>