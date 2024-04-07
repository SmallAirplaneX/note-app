<template>
    <div class="main-grid full">
        <div class="main-top flex-rx-yc p-r-20px gap-3">
          <slot name="nav"></slot>
          <!-- <n-button @Click="quire()">查询</n-button>
          <el-input v-model="quirevar" style="width: 300px;">关键字</el-input> -->
        </div>
        <div class="main-con">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto;
}

.main-top {
  grid-area: 1 / 1 / 2 / 2;
}

.main-con {
  grid-area: 2 / 1 / 3 / 2;
  overflow: auto;
}
</style>