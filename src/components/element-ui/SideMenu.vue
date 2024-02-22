<template>
    <el-menu
        default-active="2"
        @open=""
        @close=""
    >
      <template v-for="menu in menus">
        <el-menu-item :index="menu.id">
          <span>{{menu.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>


</template>

<script setup>
const menus =ref([
        {
            id:1,
            title:"你好！"
        },
        {
            id:1,
            title:"你好！"
        },
    ])
</script>