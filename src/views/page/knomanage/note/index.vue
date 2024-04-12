<template>
  <el-popover
      ref="popoverRef"
      :virtual-ref="buttonRef"
      trigger="click"
      title="With title"
      virtual-triggering
  >
    <span> Some content </span>
  </el-popover>
  <Layout>
    <template #nav>
      <el-button @click="openForm">新建</el-button>
      <el-dialog v-model="state" title="创建笔记" width="90%" min-height="900px">
        <el-form  :model="form" label-width="120px">
          <el-form-item label="名称">
            <el-input v-model="form.noteName" style="width: 240px;margin-right: 20px" placeholder="笔记名称" />
<!--            <el-button ref="buttonRef" v-click-outside="onClickOutside">-->
<!--              Click me-->
<!--            </el-button>-->
            <el-select
                v-model="form.topicId"
                filterable
                placeholder="主题名称"
                style="width: 240px"
            >
              <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
              />
            </el-select>
<!--            <el-tag>1</el-tag> <el-tag>2</el-tag>-->
          </el-form-item>
          <el-form-item >
            <MarkdownEdite data="data" />
          </el-form-item>
          <el-form-item>
            <el-button @click="submit">创建</el-button>
            <el-button @click="update">更新</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </template>
    <template #default>
    <NoteList />
    </template>
  </Layout>

</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNoteStore } from "@/stores/components/Note.js";
import Layout from "@/views/layout/manager/index.vue";
import MarkdownEdite from "@/components/MarkdownEdite.vue";
import NoteList from "@/components/NoteList.vue";

import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

const buttonRef = ref()
const popoverRef = ref()
// const onClickOutside = () => {
//   unref(popoverRef).popperRef?.delayHide?.()
// }

const store = useNoteStore()
const { openForm, submit ,update} = useNoteStore()
const { options, state, form } = storeToRefs(store)
onMounted(()=>{
  store.flash()
})

</script>

<style scoped></style>