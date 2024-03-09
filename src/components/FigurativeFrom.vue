
<template>
  <el-form :model="form" label-width="auto" >
    <el-form-item label="名称">
      <el-input v-model="input" style="width: 240px" placeholder="名称" />
    </el-form-item>
    <el-form-item label="模板选择">
      <el-select
          v-model="value"
          filterable
          placeholder="Select"
          style="width: 240px"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

    </el-form-item>
    <template v-for="a in options">
      <el-form-item  :label=a.label>
        <el-input
            v-model="textarea2"
            style="width: 500px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
        />
      </el-form-item>
    </template>


  </el-form>

</template>


<script setup>



import { ref } from 'vue'
import api from "@/api";
import { useTemplateStore } from '@/stores'
const store = useTemplateStore()
const attributes = ref([])
const value = ref('')
const input = ref('')
const options = ref([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])



onMounted(() => {
  api.getTemplates().then((res) => {
    let temp = []
    res.data.forEach( e =>{
      temp.push(
          {
            value: e.id,
            label: e.name,
          }
      )
      options.value = temp
    })
  });
})
</script>