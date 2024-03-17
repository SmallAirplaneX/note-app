<template>
    <Layout>
      <template #nav>
        <AttributeForm/>
      </template>
      <template #default>
        <AttributeTable height="666px"/>
      </template>
    </Layout>
</template>

<script setup>
// 组件
import Layout from '@/views/layout/manager/index.vue'
import AttributeTable from '@/components/AttributeTable.vue'
import AttributeForm from '@/components/AttributeForm.vue'








</script>
