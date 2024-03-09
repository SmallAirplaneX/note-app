<template>
    <el-table :data="store.attributes"  :height=props.height>
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="name" label="属性名称" width="250" />
      <el-table-column prop="type" label="类型" width="90"/>
      <el-table-column prop="explanation" label="解释" />
      <el-table-column fixed="right" label="操作" width="120">
        <template  #default="scope">
          <template v-if="store2.selection">
            <el-button link type="primary" size="small" @click="store.handleDelete(scope)">删除</el-button>
            <el-button link type="primary" size="small" @click="store.handleUpdata(scope)">修改</el-button>
          </template>
          <template v-else>
            <el-button link type="primary" size="small" @click="store2.addAtt(scope)">添加</el-button>
          </template>
        </template>

      </el-table-column>
  </el-table>
  
  <el-pagination class="center-x" background layout="prev, pager, next" :total="1000" />
</template>



<script setup>
import { useAttributeStore ,useTemplateStore} from '@/stores'

const store = useAttributeStore()
const store2 = useTemplateStore()
const props = defineProps(['height'])
onMounted(() => {
  store.flash()
})
</script>
