<template>
    <Layout>
    <template #nav>
      <DefineTemplate />
    </template>
    <template #default>
      <ListTemplate/>
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/views/layout/manager/index.vue'
import DefineTemplate from '@/components/AbstractForm.vue';
import ListTemplate from '@/components/AbstractTable.vue';
</script>

<style scoped>
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
