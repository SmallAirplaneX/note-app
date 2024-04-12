<template>
  <div class="top-grid full">
    <div class="top-left p-l-20px flex-x-yc full gap-5">
      <n-button style="font-size: 1.2rem" text @click="store.changeCollapse()">
        <n-icon>
          <svg viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"
                fill="currentColor"></path>
          </svg>
        </n-icon>
      </n-button>
      <n-button style="font-size: 1.2rem" text @Click="reload()">
        <n-icon>
          <Reload/>
        </n-icon>
      </n-button>
      <n-breadcrumb style="font-size: 16px">
        <n-breadcrumb-item v-for="(item,index) in route.matched" :href="item.path">{{ item.meta.title }}
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="top-con flex-x-yc full">
      <el-popover
          placement="bottom"
          width="550px"
          trigger="click"
          :show-arrow=false
      >
        <template #reference>
          <el-input
              v-model="input"
              style="max-width: 600px"
              placeholder="搜索一下"
              class="input-with-select"
          >
            <template #prepend>
              <el-button :icon="FlashOutline" />
            </template>
            <template #append>
              <el-select v-model="select" placeholder="搜索范围" style="width: 85px">
                <el-option label="概念" value="1" />
                <el-option label="模板" value="2" />
                <el-option label="对象" value="3" />
                <el-option label="笔记" value="4" />
              </el-select>
            </template>
          </el-input>
        </template>
        <el-table :data="gridData">
          <el-table-column width="150" property="date" label="date" />
          <el-table-column width="100" property="name" label="name" />
          <el-table-column width="300" property="address" label="address" />
        </el-table>
      </el-popover>


    </div>
    <div class="top-right flex-xl-yc p-r-50px gap-5">
      <el-popover
          :width="120"
          placement="bottom"
          trigger="hover"
      >
        <template #reference>
          <el-avatar :src="UserImage"/>
        </template>
        <el-button @click="store2.userInfo()">个人信息</el-button>
        <el-button @click="store2.logout()">退出登陆</el-button>
      </el-popover>

      <el-button text>
        <el-icon size="1.5rem" >
          <SettingsOutline />
        </el-icon>
      </el-button>
<!--      <el-button @click="change">{{isDark ? "白天" : "晚上"}}</el-button>-->
    </div>

  </div>
</template>

<script setup>
import {FlashOutline, Reload, SettingsOutline} from "@vicons/ionicons5";
import { ref } from 'vue'

import {useAppStore,useUserStore} from '@/stores'
import UserImage from '@/assets/user.jpg'
import {useRoute, useRouter} from "vue-router";
import { Search } from '@element-plus/icons-vue'
const router = useRouter()
const route = useRoute()

const store = useAppStore()
const store2 = useUserStore()
const input = ref('')
const select = ref('')
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
const reload = () => {
  router.go(0)
}

</script>


<style scoped>
.top-grid {
  display: grid;
  grid-template-columns: 0.7fr 0.8fr 0.6fr;
  grid-template-rows: 1fr;
}
</style>