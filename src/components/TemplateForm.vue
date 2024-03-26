<template>
  <el-button plain @click="store.openForm('创建')">
    新建
  </el-button>
  <el-dialog v-model="store.state" title="创建模板" width="900" :before-close="() => store.closeForm()">
    <el-form :inline="true" :model="store.form" label-width="120px">
      <el-form-item label="模板名称">
        <el-input v-model="store.form.template.name"/>
      </el-form-item>
      <el-form-item label="已添加属性">
        <el-tag v-for="concept in store.form.concepts" closable @close="store.removeAtt(concept)">
          {{ concept.name }}
        </el-tag>
        <el-tag v-for="concept in store.conceptsFromTemplate" type="success">
          {{ concept.name }}
        </el-tag>
      </el-form-item>
      {{store.form.template}}
      <el-form-item label="继承选项">
        <el-select
            v-model="store.form.template.parentId"
            filterable
            placeholder="选择"
            :filter-method="store.filterMethod"
            :change="store.change()"
            style="width: 240px"
        >
          <el-option
              v-for="item in store.options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <AttributeTable height="450px" :add="store"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @Click="store.submit()">{{ store.model }}</el-button>
        <el-button @click="store.closeForm()">取消</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>


<script setup>
import AttributeTable from '@/components/ConceptTable.vue';

import {useTemplateStore} from '@/stores'

const store = useTemplateStore()
</script>
