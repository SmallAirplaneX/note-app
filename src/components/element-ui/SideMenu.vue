<template>
    <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        :collapse="store.isCollapse"
        :router="true"
    >
    <template v-for="menu in menus">
        <el-sub-menu :index="menu.id">
            <template #title>
            <span>{{menu.title}}</span>
          </template>

          <template v-for="children in menu.children">
            <el-menu-item :index="children.url" >
               {{children.title}}
            </el-menu-item>
      </template>



        </el-sub-menu>
    </template>

 


    </el-menu>


</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const menus =ref([
        {
            id:"1",
            title:"管理",
            children:[
                {
                    id:"1-1",
                    title:"属性管理",
                    url:'manageAttributes'
                },
                {
                    id:"1-2",
                    title:"模板管理",
                    url:'manageTemplates'
                },
                {
                    id:"1-3",
                    title:"主题管理",
                    url:'manageNotes'
                },
            ]
        },
        {
            id:"2",
            title:"你好！"
        },
    ])
</script>