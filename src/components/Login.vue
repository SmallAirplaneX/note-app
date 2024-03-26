<script setup>
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useUserStore } from "@/stores/index.js";

const store = useUserStore()
const router = useRouter()
const ruleFormRef = ref()
const validateUser = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('账号不能为空'))
  }else {
    callback()
  }
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  }else {
    callback()
  }
}

const rules = reactive({
  name: [{ validator: validateUser, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
})
</script>

<template>
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="store.loginForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="form center"
  >
    <div style="font-size: 24px;text-align: center">Logo</div>
    <div class="center-x font-bold m-25px" style="font-size: 24px;color: #242629">账号登录</div>
    <el-form-item prop="name" >
      <el-input v-model="store.loginForm.name" type="text" autocomplete="off" placeholder="用户名/邮箱" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
          v-model="store.loginForm.password"
          type="password"
          autocomplete="off"
          placeholder="密码"
      />
    </el-form-item>
    <el-form-item>
      <el-button
          class="sub"
          :class="(store.loginForm.name === '' || store.loginForm.password === '') ? 'submit' : 'en'"
          type="primary"
          :disabled="store.loginForm.name === '' || store.loginForm.password === ''"
          @click="store.login()">登录</el-button>
    </el-form-item>
    <el-form-item>
      <el-row justify="space-between">
        <el-button link type='warning' >遇到问题</el-button>
        <el-button link type='warning' @click="store.goRegister()">立即注册</el-button>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.form{
  width: 380px;
  background: white;
  padding: 34px;
  border-radius: 25px;
}
:deep(.el-input__wrapper){
  border-radius: 25px;
  background: #FAFAFC;
  height: 50px;
  font-size: 16px;
}
.sub{
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #555555;
}
.submit {
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 25px;
  background: #9d9d9f;
  color: #555555;
}
.submit:hover {
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 25px;
  background: #9d9d9f;
  color: #555555;
}
.en {
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 25px;
  background: #353536;
  color: #ffffff;
}
.en:hover {
  background: #252424;
  color: #ffffff;
}
</style>