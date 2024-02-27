<template>
  {{ props.selection }}
    <el-table :data="store.attributes" @selection-change="handleSelectionChange"  height="650">
      <el-table-column v-if="props.selection == 'true'" type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="name" label="属性名称" width="250" />
      <el-table-column prop="type" label="类型" width="90"/>
      <el-table-column prop="time" label="创建时间" width="90"/>
      <el-table-column prop="explanation" label="解释" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >删除</el-button
          >
          <el-button link type="primary" size="small">修改</el-button>
        </template>
      </el-table-column>
  </el-table>
  
  <el-pagination class="center-x" background layout="prev, pager, next" :total="1000" />
</template>



<script setup>
import { useMessage } from "naive-ui";
import { useCounterStore } from '@/stores/counter'
const props = defineProps(['selection'])
const store = useCounterStore()
const message= useMessage()
const handleSelectionChange = (selection)=>{
    // 打印当前选中的行数据
    console.log(selection);
  }
const handleClick = () => {
  message.info("删除")
}

onMounted(() => {
  store.getAttributes()
})



</script>
