<template>
    <div class="top-grid full">
        <div class="top-left p-l-20px flex-x-yc full gap-5">
            <n-button text style="font-size: 1.2rem" @click="store.changeCollapse()">
                <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1024 1024">
                        <path
                            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"
                            fill="currentColor"></path>
                    </svg>
                </n-icon>
            </n-button>
            <n-button text style="font-size: 1.2rem" @Click="reload()">
                <n-icon>
                    <Reload />
                </n-icon>
            </n-button>
            <n-breadcrumb style="font-size: 16px">
                    <n-breadcrumb-item v-for="(item,index) in route.matched"  :href="item.path">{{item.meta.title}}</n-breadcrumb-item>
            </n-breadcrumb>
        </div>
        <div class="top-con flex-x-yc full">
            <n-input round placeholder="空">
                <template #prefix>
                    <n-icon :component="FlashOutline" />
                </template>
            </n-input>
        </div>
        <div class="top-right p-r-20px">
            <div class="flex-rx-yc full gap-5">
                <div style="border-left: 1px solid rgba(0, 0, 0, 0.253);padding-left: 20px;">
                    <n-button style="padding-top: 8px;" text>
                        <n-icon size="1.5rem">
                            <SettingsOutline />
                        </n-icon>
                    </n-button>
                </div>
                <el-avatar  :src="UserImage"/>
            </div>
        </div>

    </div>
</template>

<script setup>
import { Reload, FlashOutline, SettingsOutline } from "@vicons/ionicons5";
import { useAppStore } from '@/stores'
import UserImage from '@/assets/user.jpg'
import { useRoute } from 'vue-router'

const store = useAppStore()
const route = useRoute()

const reload = () => {
    // router.push("/manageTemplates")
    // router.push(route.path)
}

</script>


<style lang="css">
.top-grid {
    display: grid;
    grid-template-columns: 500px auto 500px;
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
}

.top-let {
    grid-area: 1 / 1 / 2 / 2;
}

.top-right {
    grid-area: 1 / 3 / 2 / 4;
}
</style>