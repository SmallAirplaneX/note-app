<template>
<div class="grid full">
        <div class="logo box" style="text-align: center;font-size: 26px;font-weight: 900;">
            <span>你好!</span>
        </div>
        <div class="top box">
            <TopToolbar />
        </div>
        <div class="left box">
            <SideMenu />
        </div>
        <div class="nav box p-l-2">
          <div class="flex-x-yc h-full gap-2">
            <!-- <span v-for="tag in store.tags">{{ tag.name }}+{{ tag.canClose }}</span> -->
          </div>
        </div>
        <div class="main box">
            <RouterView />
        </div>
    </div>
</template>
  
<script setup>
import SideMenu from '@/components/element-ui/SideMenu.vue';
import TopToolbar from '@/components/TopToolbar.vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
watch(() => route.path, (newPath) => {
    console.log(newPath)
    var name = ''
    route.matched.forEach(e=>{
        name = e.meta.title
    })
    if (!store.tags.includes(newPath)) {
    store.tags.push({
      path:newPath,
      name: name,
      canClose:true,
    });
  }
  console.log(store.tags)
}, { immediate: true });
</script>
  
<style scoped>
.grid{
    display: grid;
    grid-template-columns: 12rem auto;
    grid-template-rows: 3.5rem 3rem auto;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: #F5F7F9;
}
.logo { 
    grid-area: 1 / 1 / 2 / 2;
    background-color: white;
}
.left { 
    grid-area: 2 / 1 / 4 / 2;
    background-color: white;
}
.top { 
    grid-area: 1 / 2 / 2 / 3;
    background-color: white;
}
.nav { grid-area: 2 / 2 / 3 / 3; }
.main { 
    grid-area: 3 / 2 / 4 / 3;
    background-color: white;
    overflow: auto;
}
</style>