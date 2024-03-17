
<template>
  <el-form :model="store.form" label-width="auto" >
    <el-form-item label="名称">
      <el-input v-model="store.form.name" style="width: 240px" placeholder="名称" />
    </el-form-item>
    <el-form-item label="模板选择">
      <el-select
          v-model="store.form.select"
          filterable
          placeholder="Select"
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
    <template v-for="a in store.form.attributes">
      <el-form-item  :label=a.name>
        <el-input
            v-model="a.data"
            style="width: 500px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
        />
      </el-form-item>
    </template>

  <el-button @click='store.submit()'>保存 </el-button>
  </el-form>

</template>


<script setup>
import api from "@/api";
import { useNoteStore } from '@/stores'

const store = useNoteStore()


onMounted(() => {
  store.flash()
})
</script>