<template>
    <n-button @click="showModal = true">
        新建
    </n-button>
    <n-modal v-model:show="showModal">
        <n-card style="width: 600px" title="定义属性" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>
                <n-button>引用</n-button>
            </template>
            <n-form label-placement="left" :rules="rules" ref="formRef">
                <n-form-item label="属性名" path="name">
                    <n-input v-model:value="data.name" placeholder="示例 | 属性名" />
                </n-form-item>
                <n-form-item label="类型" path="type">
                    <n-select v-model:value="data.type" :options="options" />
                </n-form-item>
                <n-form-item label="相关解释" path="info">
                    <n-input v-model:value="data.explanation" placeholder="示例 | 相关解释" type="textarea" size="small"
                        :autosize="{
                            minRows: 3,
                            maxRows: 5
                        }" />
                </n-form-item>
            </n-form>
            <template #footer>
                <n-flex justify="end">
                    <n-button :loading="loadingRef" @click="submit()">创建</n-button>
                    <n-button @click="showModal = false">取消</n-button>
                </n-flex>
            </template>
        </n-card>
    </n-modal>
</template>

<script setup>
import { ref } from 'vue';
import { createAttribute } from '@/http/api'
import { useMessage } from 'naive-ui'

const showModal = ref(false) //按钮--加载状态
const message = useMessage()//消息提示
const loadingRef = ref(false)
const formRef = ref(null)

const data = ref({
    name: '',
    type: '',
    explanation: '',
})
//改动--从服务器获取数据
const options = ref([
    {
        label: "默认",
        value: "default"
    },
    {
        label: "数字-时间",
        value: "number"
    }
])

//判断--检验表单内容
const rules = {
    name: {
        required: true,
        validator() {
            if (data.value.name == '') {
                return new Error("名字不能为空");
            }
        },
        trigger: ["input", "blur"]

    },
    type: {
        required: false,
        message: '请指定类型',
        trigger: ["input", "blur"]
    },
    info: {
        required: true,
        validator() {
            if (data.value.explanation == '') {
                return new Error("解释不能为空");
            }
        },
        trigger: ["input", "blur"]
    }
}

const submit = () => {
    
    formRef.value?.validate((errors) => {               
        if (errors) {                       //验证不通过
             message.error('输入有误') 
             return;
        }  

        loadingRef.value = true;                    //验证通过,按钮设置为加载状态
        createAttribute(data.value)                 //发起请求
        .then(
            res => {                                    
                loadingRef.value = false            //操作成功，取消按钮加载状态
                message.success("属性创建成功!")
                showModal.value = false
            }
        )
        .catch(
            error => {
                loadingRef.value = false
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
    })
};
</script>
