<template>
<div class="grid full">
        <div class="logo" style="text-align: center;font-size: 2.4rem">
            笔记构建
        </div>
        <div class="top">
            <TopToolbar />
        </div>
        <div class="left">
            <SideMenu />
        </div>
        <div class="nav">
            <Tab />
        </div>
        <div class="main">
            <RouterView />
        </div>
    </div>
</template>
  
<script setup>
import SideMenu from '@/components/SideMenu.vue';
import TopToolbar from '@/components/TopToolbar.vue'
import Tab from '@/components/Tab.vue'
import {RouterView} from "vue-router";
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