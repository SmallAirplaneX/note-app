<template>
  <el-button plain @click="dialogTableVisible = true">
    新建
  </el-button>
  <el-dialog v-model="dialogTableVisible" title="创建模板" width="900">
    <el-form :inline="true" :model="form" label-width="120px">
      <el-form-item label="模板名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="已添加属性">
        <el-tag>123</el-tag>
      </el-form-item>
      <el-form-item label="继承选项">
        <el-input>123</el-input>
      </el-form-item>
      <el-form-item>
        <ListAttribute selection="true"  height="300px"/>
      </el-form-item>
      <el-form-item>
                <el-button type="primary" >创建</el-button>
                <el-button >取消</el-button>
      </el-form-item>
    </el-form>
    
  </el-dialog>
</template>



<script setup>
import { ref } from 'vue';
import ListAttribute from '@/components/ListAttribute.vue';
const dialogTableVisible = ref(false)
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}

</script>
