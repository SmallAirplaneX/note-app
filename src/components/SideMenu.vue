<template>
  <el-menu
      :collapse="false"
      :router="true"
      :default-active="route.path"
      @close="handleClose"
      @open="handleOpen">
    <el-menu-item index="/data-manager/home">主页</el-menu-item>
    <el-sub-menu index="/data-manager/attributes">
      <template #title>
        <span>数据管理</span>
      </template>
      <el-menu-item index="/data-manager/attributes">属性管理</el-menu-item>
      <el-menu-item index="/data-manager/templates">模板管理</el-menu-item>
      <el-menu-item index="/data-manager/objects">对象管理</el-menu-item>
      <el-menu-item index="/data-manager/note">写笔记</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()


const handleOpen = (key, keyPath) => {
  //   console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  //   console.log(key, keyPath)
}
</script>