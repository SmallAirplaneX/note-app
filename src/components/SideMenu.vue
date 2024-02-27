<template>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" :collapse="store.isCollapse" :router="true">
        <template v-for="(menu,index) in store.menus">
            <el-menu-item :index="menu.path">
                   {{ menu.title }}
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useCounterStore()


onMounted(() => {
    let temp = []
    let menu = router.getRoutes()
    menu.forEach((e)=>{
        temp.push({
            title:e.meta.title,
            path:e.path,
        })
    })
    store.menus = temp
    console.log(temp)
})

const handleOpen = (key, keyPath) => {
    //   console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    //   console.log(key, keyPath)
}
</script>