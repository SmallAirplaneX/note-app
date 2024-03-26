<script setup>
import { reactive, ref } from 'vue'
import { useRouter} from 'vue-router'

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
  } else {
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('确认密码不能为空'))
  } else if (value !== store.registerForm.password) {
    callback(new Error("密码不一致"))
  } else {
    callback()
  }
}

const rules = reactive({
  name: [{ validator: validateUser, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
  password2: [{ validator: validatePass2, trigger: 'blur' }],
})
</script>

<template>
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="store.registerForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="form center"
  >
    <div style="font-size: 24px;text-align: center">Logo</div>
    <div class="center-x font-bold m-25px" style="font-size: 24px;color: #242629">注册</div>
    <el-form-item prop="name" >
      <el-input v-model="store.registerForm.name" type="text" autocomplete="off" placeholder="用户名/邮箱" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
          v-model="store.registerForm.password"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
      />
    </el-form-item>
    <el-form-item prop="password2">
      <el-input
          v-model="store.registerForm.password2"
          type="password"
          autocomplete="off"
          placeholder="请再次输入密码"
      />
    </el-form-item>
    <el-form-item>
      <el-button
          :class="(store.registerForm.name === '' || store.registerForm.password === '' || store.registerForm.password2 === ''|| store.registerForm.password !== store.registerForm.password2) ? 'submit' : 'en'"
          type="primary"
          :disabled="store.registerForm.name === '' || store.registerForm.password === '' || store.registerForm.password2 === ''|| store.registerForm.password !== store.registerForm.password2"
          @click="store.register()">注册</el-button>
    </el-form-item>
    <el-form-item>
      <el-row justify="space-between">
        已有账号？
        <el-button link type='warning' @click="store.goLogin()">登录</el-button>
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
.submit {
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 25px;
  background: #9d9d9f
}
.submit:hover {
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 25px;
  background: #9d9d9f
}
.en {
  height: 45px;
  border: none;
  width: 100%;
  border-radius: 25px;
  background: #353536
}
.en:hover {
  background: #252424
}
</style>