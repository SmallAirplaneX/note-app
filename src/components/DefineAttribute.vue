<template>
    <n-button @click="store.attributeFormV = true">
        新建
    </n-button>
    <el-dialog v-model="store.attributeFormV" title="创建属性" width="500" label-position='left'>
        <el-form :model="store.attributeForm" label-width="200px">
            <el-form-item label="属性名称">
                <el-input v-model="store.attributeForm.name" />
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="store.attributeForm.type" placeholder="please select your zone">
                    <el-option label="默认" value="default" />
                    <el-option label="数字" value="number" />
                </el-select>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="store.attributeForm.explanation" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{store.model==false ? '创建' : '修改'}}</el-button>
                <el-button @click="store.attributeFormV = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { createAttribute ,updateAttribute} from '@/http/api'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const dialogVisible = ref(false)

const onSubmit = () => {
    if (store.model){
        // updateAttribute(store.attributeForm).then(
        //     res => {
        //         dialogVisible.value = false
        //         store.getAttributes()
        //         store.clearAttributeForm()
        //     }
        // )
        return;
    }
    createAttribute(store.attributeForm).then(                 //发起请求
        res => {
            dialogVisible.value = false
            store.getAttributes()
            store.clearAttributeForm()
        }
    ).catch(
        error => {
            if (error.response) {
                //请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
                //错误提示
                message.error("属性创建失败！");
                return;
            } else if (error.request) {
                // 请求已经成功发起，但没有收到响应
                // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
                // 而在node.js中是 http.ClientRequest 的实例
                message.error("服务器未响应！");
                return;
            } else {
                // 发送请求时出了点问题
                message.error("未知错误！");
                return;
            }
        }
    );
};
</script>
