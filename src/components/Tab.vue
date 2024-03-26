<template>
    <div class="p-l-2 flex-x-yc h-full gap-2">
        <el-tag v-for="(tag, index) in store.tags" :key="index" :closable="tag.canClose" :disable-transitions="false"
                @close="handleClose(tag)" @click="handleClick(tag)" size="large">
            <template #default>
                <el-button :link="true" color="#9CEAFF">{{ tag.name }}</el-button>
            </template>
        </el-tag>
    </div>
</template>


<script setup>
import { useRouter, useRoute , } from 'vue-router'
import { useAppStore } from '@/stores'
import { ref,watch } from 'vue'
const store = useAppStore()
const route = useRoute()
const router = useRouter()

watch(
    () => route.path,
    (newPath) => {
        var name = ''
        route.matched.forEach(e => {
            name = e.meta.title
        })

        if (!store.tags.find(item => item.path === newPath) && newPath !== '/') {
            store.tags.push({
                path: newPath,
                name: name,
                canClose: true,
            });
        }
    },
    { immediate: true });

const handleClose = (tag) => {
    store.tags = store.tags.filter(item => item.path != tag.path)
}
const handleClick = (tag) => {
    router.push(tag.path)
}
</script>
