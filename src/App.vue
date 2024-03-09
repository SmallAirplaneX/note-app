<template>
  <n-message-provider>
    <n-dialog-provider>
      <Layout>
        <RouterView />
      </Layout>
    </n-dialog-provider>
  </n-message-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Layout from '@/views/layout/index.vue'
</script>

<style>
</style>


