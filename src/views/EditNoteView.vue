<script setup>
import DefineTheme from '@/components/DefineTheme.vue'
</script>

<template>
    <!-- 命名&模板选择 -->
    <div style="padding: 2rem;">
        <n-flex vertical>
            <DefineTheme />
            <p>引用</p>
            <n-input placeholder="空" type="textarea" size="large" :autosize="{
                minRows: 3,
                maxRows: 5
            }" />
            <p>正文</p>
            <n-input placeholder="空" type="textarea" size="large" :autosize="{
                minRows: 5,
                maxRows: 5
            }" />


            <n-button>123</n-button>

            <button>确认提交</button>



        </n-flex>

    </div>
</template>

<style scoped></style>
