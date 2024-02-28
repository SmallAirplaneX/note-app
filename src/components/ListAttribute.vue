<template>
    <el-table :data="store.attributes" @selection-change="handleSelectionChange"  :height=props.height>
      <el-table-column v-if="props.selection == 'true'" type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="name" label="属性名称" width="250" />
      <el-table-column prop="type" label="类型" width="90"/>
      <el-table-column prop="time" label="创建时间" width="90"/>
      <el-table-column prop="explanation" label="解释" />
      <el-table-column fixed="right" label="操作" width="120">
        <template v-if="props.selection == 'true'" #header>
        <el-button @click="add()">添加</el-button>
      </template>
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleDelete(scope)">删除</el-button
          >
          <el-button link type="primary" size="small" @click="handleUpdate(scope)">修改</el-button>
        </template>
      </el-table-column>
  </el-table>
  
  <el-pagination class="center-x" background layout="prev, pager, next" :total="1000" />
</template>



<script setup>
import { deleteAttribute } from '@/http/api'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
import { ref } from "vue";
const props = defineProps(['selection','height'])
const selected = ref([])
const add = () =>{
  console.log(selected.value) 



  
}
const handleSelectionChange = (selection)=>{
    // 打印当前选中的行数据
    selected.value = selection
  }
 const handleDelete = (e) => {
  
  deleteAttribute({
    id:e.row.id
  })
  setTimeout (store.getAttributes(),2000)
}
const handleUpdate = (e=>{
  store.attributeForm = e.row
  store.model=true
  store.attributeFormV = true

  // store.attributeUpdate(e.row)
  // store.getAttributes()
})

onMounted(() => {
  store.getAttributes()
})



</script>
