import { defineStore } from "pinia";
import api from "@/api";
import { useRouter} from 'vue-router'
import { ref } from 'vue'


export const useUserStore = defineStore("user", ()=>{
    const loginForm = ref({
        name: '',
        password: ''
    })
    const registerForm = ref({
        name: '',
        password: '',
        password2: '',
    })
    const router = useRouter()
    function login(){
        api.user.login(this.loginForm).then(res => {
            let type = '';
            //res.data.code各位为0、1、2、3时，type依次分别为error、success、warning、info
            switch (res.data.code % 10) {
                case 0:
                    type = 'error';
                    break;
                case 1:
                    type = 'success';
                    break;
                case 2:
                    type = 'warning';
                    break;
            }
            ElMessage({
                type: type,
                message: res.data.message,
            });

            if (res.data.code  % 10 === 1){
                localStorage.setItem("token","test");
                router.push({name: 'DataHome'}).then(r => {})
            }
        })
    }
    function register(){
        api.user.register({
            name:this.registerForm.name,
            password:this.registerForm.password,
            permissions:-1
        }).then(res => {
            if (res.data.code  % 10 === 1){
                localStorage.setItem("token","test");
                router.push({name: 'DataHome'}).then(r => {})
            }
        })
    }
    function logout(){

        //删除本地token
        localStorage.removeItem("token")
        //刷新当前页面
        router.go(0)
    }
    function goRegister(){
        router.push({name: 'Register'}).then(r => {})
    }
    function goLogin(){
        router.push({name: 'Login'}).then(r => {})
    }
    function userInfo(){
        router.push({name: 'User'}).then(r => {})
    }
    return { login,logout,loginForm,registerForm,goRegister,goLogin,register,userInfo }
});
