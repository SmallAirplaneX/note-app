<template>
    <el-button @click="store.openForm('新建')">
        新建
    </el-button>
    <el-dialog v-model="store.state" title="创建概念" width="500" label-position='left' :before-close=store.closeForm >
        <el-form :model="store.form" label-width="90px">
            <el-form-item label="概念名称">
                <el-input v-model="store.form.name" />
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="store.form.type" placeholder="类型">
                    <el-option label="默认" value="default" />
                    <el-option label="数字" value="number" />
                </el-select>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="store.form.explanation" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="store.submit()">{{ store.model }}</el-button>
                <el-button @click="store.closeForm()">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useAttributeStore } from '@/stores'
const store = useAttributeStore()
</script>

<style scoped>

</style>
