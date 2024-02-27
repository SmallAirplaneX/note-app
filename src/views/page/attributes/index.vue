<template>
    <Layout>
      <template #nav>
        <DefineAttribute />
      </template>
      <template #default>
        <ListAttribute selection="false" height="750px"/>
      </template>
    </Layout>
</template>

<script setup>
import Layout from '@/views/page/layout/Manage.vue'
import ListAttribute from '@/components/ListAttribute.vue'
import DefineAttribute from '@/components/DefineAttribute.vue'
</script>
