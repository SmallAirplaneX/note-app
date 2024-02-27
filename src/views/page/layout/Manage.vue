<template>
    <div class="main-grid full">
        <div class="main-top flex-rx-yc p-r-20px gap-3">
          <slot name="nav"></slot>
          <n-button @Click="quire()">查询</n-button>
          <el-input v-model="quirevar" style="width: 300px;">关键字</el-input>
        </div>
        <div class="main-con">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import DefineAttribute from '@/components/DefineAttribute.vue'
import ListAttribute from '@/components/element-ui/ListAttribute.vue'
import { quireAttribute } from '@/http/api'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const quirevar = ref('')

function quire(){
  if(!quirevar.value){
    return
  }
  quireAttribute( {
    "name" : quirevar.value
  } ).then(res=>{
    store.attributes = res.data
  })
}
</script>

<style>
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto;
}

.main-top {
  grid-area: 1 / 1 / 2 / 2;
}

.main-con {
  grid-area: 2 / 1 / 3 / 2;
  overflow: auto;
}
</style>