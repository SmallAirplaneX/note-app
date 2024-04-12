<script setup>
// import { ref, onMounted } from 'vue';
// import Vditor from 'vditor';
// import 'vditor/dist/index.css';
//
// const props = defineProps(['data'])
// const vditor = ref<Vditor | null>(null);
//
// onMounted(() => {
//   vditor.value = new Vditor('vditor', {
//     mode: 'wysiwyg',
//     height:'900px',
//     input (md) {
//       props.data = md;
//     },
//     after: () => {
//     },
//   });
// });\
import { useNoteStore } from "@/stores/components/Note.js";
import { storeToRefs } from 'pinia'



const store = useNoteStore()
const { convert } = store
const { input,triggerRef} = storeToRefs(store)

function mousemoveHandler (e) {
    store.position = DOMRect.fromRect({
      width: 0,
      height: 0,
      x: e.clientX,
      y: e.clientY,
    })
}

onMounted(() => {
  document.addEventListener('mousemove', mousemoveHandler)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', mousemoveHandler)
})
</script>


<template>
<!--  <div id="vditor" />-->


  <el-popover
      v-model:visible="store.visible"
      trigger="click"
      virtual-triggering
      :virtual-ref="triggerRef"
  >
    <el-space direction="vertical">
      <template  v-for="(item,index) in store.auto">
        <el-button  @click="store.pase(item)">
          {{item.name}}
          {{item.id}}
        </el-button>

      </template>
    </el-space>
  </el-popover>

  <div class="container">
    <el-input v-model="input" type="textarea" @input="convert" ></el-input>
    <VueShowdown
        class="render"
        :markdown="input"
        flavor="github"
        :options="{ emoji: true }"
    />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
  height: 550px;
}
.render{
  background-color: #f5f5f5;
  border-radius: 15px;
  padding : 0 10px;
  max-height: 550px;
  overflow:auto;
}
:deep(.el-textarea__inner) {
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 15px;
  border: none;
  padding : 10px;
  max-height: 550px;
  overflow:auto;
}

</style>