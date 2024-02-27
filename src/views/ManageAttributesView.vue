<template>
    
    <Layout>
      <template #nav>
        <DefineAttribute />
      </template>
      <template #default>
        <ListAttribute selection="false"/>
      </template>
    </Layout>
</template>

<script setup>
import Layout from '@/views/page/layout/Manage.vue'

</script>
