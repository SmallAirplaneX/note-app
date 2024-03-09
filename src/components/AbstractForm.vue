<template>
  <el-button plain @click="store.openForm()">
    新建
  </el-button>
  <el-dialog v-model="store.state" title="创建模板" width="900" :before-close="() => store.closeForm()">
    <el-form :inline="true" :model="store.form" label-width="120px">
      <el-form-item label="模板名称">
        <el-input v-model="store.form.name"/>
      </el-form-item>
      <el-form-item label="已添加属性">
        <el-tag v-for="attribute in store.form.attribute_id" closable @close="store.removeAtt(attribute)">
          {{ attribute.name }}
        </el-tag>
      </el-form-item>
      <el-form-item label="继承选项">
        <el-input v-model="store.form.parent"/>
      </el-form-item>
      <el-form-item>
        <AttributeTable height="300px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @Click="store.submit()">创建</el-button>
        <el-button @click="store.closeForm()">取消</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>


<script setup>
import AttributeTable from '@/components/AttributeTable.vue';

import {useTemplateStore} from '@/stores'

const store = useTemplateStore()
</script>
