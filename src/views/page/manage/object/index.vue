<template>
  <Layout>
    <template #nav>
      <ObjectFrom />
    </template>
    <template #default>
      <ObjectTable />
    </template>
  </Layout>


</template>

<script setup>
import Layout from '@/views/layout/manager/index.vue'
import ObjectFrom from "@/components/ObjectFrom.vue";
import ObjectTable from "@/components/ObjectTable.vue";
import { useObjectStore } from "@/stores/index.js";

const store = useObjectStore();
const handleClick = (tab, event) => {
  console.log(tab, event)
}

</script>


<style scoped>


</style>