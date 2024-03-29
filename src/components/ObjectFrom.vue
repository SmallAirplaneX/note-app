
<template>
  <el-form :model="store.form" label-width="auto" >
    <el-form-item label="名称">
      <el-input v-model="store.form.myobject.name" style="width: 240px" placeholder="名称" />
    </el-form-item>
    <el-form-item label="模板选择">
      <el-select
          v-model="store.form.myobject.templateId"
          filterable
          placeholder="选择模板"
          style="width: 240px"
          :change="store.change()"

      >
        <el-option
            v-for="item in store.options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        />
      </el-select>

    </el-form-item>
    <template v-for="information in store.form.information">
      <el-form-item  :label=information.name>
        <el-input
            v-model="information.text"
            style="width: 500px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="信息"
        />
      </el-form-item>
    </template>

  <el-button @click='store.submit()'>创建对象</el-button>
  </el-form>

</template>


<script setup>
import { useObjectStore } from '@/stores'
import {useTemplateStore} from '@/stores'

const store = useObjectStore()


onMounted(() => {
  store.flash()
})
</script>