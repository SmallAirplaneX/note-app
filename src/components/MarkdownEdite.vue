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
// });
const input = ref('')
const output = ref('')

function convert() {
  const converter = new showdown.Converter({tables: true});
  output.value = converter.makeHtml(input.value);
}
</script>


<template>
<!--  <div id="vditor" />-->
  <div class="container">
    <el-input v-model="input" type="textarea" @input="convert" @keydown.tab.stop=""></el-input>
    <div class="render" v-html="output" type="textarea"></div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
  height: 100%;
}
.render{
  background-color: #f5f5f5;
  border-radius: 15px;
  padding : 0 10px;
}
:deep(.el-textarea__inner) {
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 15px;
  border: none;
  padding : 10px;
}

</style>