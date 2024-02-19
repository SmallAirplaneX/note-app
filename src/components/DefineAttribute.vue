<script setup>
import { ref } from 'vue';
import { createAttribute } from '@/http/api'
import { useDialog, useMessage } from 'naive-ui'

const showModal = ref(false)
const message = useMessage()
const dialog = useDialog()
const data = ref({
    name: '',
    type: '',
    explanation: '',
})

const loadingRef = ref(false);
const formRef = ref(null)

let messageReactive = null;


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
    //验证输入
    formRef.value?.validate((errors) => {
        if (!errors) {
            //验证通过
            loadingRef.value = true;
            //弹出提示
            if (!messageReactive) {
                messageReactive = message.loading("创建属性中！", {
                    duration: 0
                });
            }
            //发起请求
            createAttribute(data.value).then(res => {
                loadingRef.value = false
                if (messageReactive) {
                    messageReactive.destroy();
                    messageReactive = null;
                }
            }).catch(function (error) {
                loadingRef.value = false;
                    if (messageReactive) {
                        messageReactive.destroy();
                        messageReactive = null;
                    }
                if (error.response) {
                    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
                    
                    //错误提示
                    dialog.error({
                        title: "错误",
                        content: "属性创建失败！",
                        positiveText: "确认",
                        onPositiveClick: () => {
                            if (messageReactive) {
                                messageReactive.destroy()
                                messageReactive = null
                            }
                        }
                    });
                } else if (error.request) {
                    // 请求已经成功发起，但没有收到响应
                    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
                    // 而在node.js中是 http.ClientRequest 的实例
                    dialog.error({
                        title: "错误",
                        content: "服务器未响应！",
                        positiveText: "确认",
                        onPositiveClick: () => {
                            if (messageReactive) {
                                messageReactive.destroy()
                                messageReactive = null
                            }
                        }
                    });
                } else {
                    // 发送请求时出了点问题
                    dialog.error({
                        title: "错误",
                        content: "未知错误！",
                        positiveText: "确认",
                        onPositiveClick: () => {
                            if (messageReactive) {
                                messageReactive.destroy()
                                messageReactive = null
                            }
                        }
                    });
                }
                console.log(error.config);
            });
        } else {
            //验证未通过
            message.error('输入有误')
        }
    })










}
</script>
<template>
    <n-button @click="showModal = true">
        来吧
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