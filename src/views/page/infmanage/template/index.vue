<template>
    <Layout>
    <template #nav>
      <AbstractForm />
    </template>
    <template #default>
      <AbstractTable/>
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/views/layout/manager/index.vue'
import AbstractForm from '@/components/TemplateForm.vue';
import AbstractTable from '@/components/TemplateTable.vue';
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
