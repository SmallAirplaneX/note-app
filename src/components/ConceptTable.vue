<template>
    <el-table :data="store.concepts"  :height=props.height>
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="概念名称" width="250" />
      <el-table-column prop="id" label="索引" />
      <el-table-column prop="type" label="类型" width="90"/>
      <el-table-column prop="explanation" label="解释" />
      <el-table-column fixed="right" label="操作" width="150">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template  #default="scope">
          <template v-if="store2.selection">
            <el-button  type="danger" size="small" @click="store.handleDelete(scope)">删除</el-button>
            <el-button  type="primary" size="small" @click="store.handleUpdata(scope)">修改</el-button>
          </template>
          <template v-else>
            <el-button type="primary" size="small" @click="props.add.add(scope)">添加</el-button>
          </template>
        </template>

      </el-table-column>
   </el-table>

  <el-pagination
      v-model:current-page="store.page"
      :background="true"
      layout="prev, pager, next, jumper"
      :page-count="Math.ceil(store.count / 15)"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</template>



<script setup>
import { useAttributeStore ,useTemplateStore} from '@/stores'
import { ref } from 'vue'

const disabled = ref(false)
const search = ref('')

const handleSizeChange = (val) => {
  store.page = val
  store.flash()
}
const handleCurrentChange = (val) => {
  store.page = val
  store.flash()
}


const store = useAttributeStore()
const store2 = useTemplateStore()
const props = defineProps(['height','add'])
onMounted(() => {
  store.flash()
})
</script>
