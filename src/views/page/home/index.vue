<template>
  数据展示

  概念数量{{store.count}}
  模板数量{{store2.count}}
  对象数量{{store3.count}}
  主题数量{{store4.count}}
  笔记数量{{store5.count}}
</template>

<script setup>
import {useAttributeStore, useObjectStore, useTemplateStore,useTopicStore,useNoteStore} from '@/stores'

const store = useAttributeStore()
const store2 = useTemplateStore()
const store3 = useObjectStore()
const store4 = useTopicStore()
const store5 = useNoteStore()
onMounted(() => {
  store.flash()
  store2.flash()
  store3.flash()
  store4.flash()
  store5.flash()
})



</script>