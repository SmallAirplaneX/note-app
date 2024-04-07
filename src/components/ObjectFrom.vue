
<template>
  <el-button @click="openForm()">
    新建
  </el-button>
  <el-dialog v-model="state" title="创建属性" width="500" label-position='left' >
    <el-form :model="form" label-width="auto" >
      <el-form-item label="名称">
        <el-input v-model="form.myobject.name" style="width: 240px" placeholder="名称" />
      </el-form-item>
      <el-form-item label="模板选择">
        <el-select
            v-model="form.myobject.templateId"
            filterable
            placeholder="选择模板"
            style="width: 240px"
            :change="change()"
        >
          <el-option
              v-for="template in templates"
              :key="template.id"
              :label="template.name"
              :value="template.id"
          />
        </el-select>
        {{form}}
      </el-form-item>
      <template v-for="information in temp">

        <el-form-item :label=information.name>
          <el-input
              v-model="information.text"
              style="width: 500px"
              :autosize="{ minRows: 2, maxRows: 4 }"
              type="textarea"
              placeholder="信息"
          />
        </el-form-item>
      </template>

      <el-button @click="submit()">创建对象</el-button>
      <el-button @click="updata()">更新对象</el-button>
    </el-form>
  </el-dialog>


</template>


<script setup>
import { useObjectStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useObjectStore()
const { openForm,change,submit,updata } = useObjectStore()
const { state,form,templates,temp} = storeToRefs(store)

onMounted(() => {
  store.flashTemplate()
})
</script>