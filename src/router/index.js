import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './basic-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes
})

router.beforeEach((to, from) => {
    const token = localStorage.getItem('token'); // 假设token存储在localStorage中
    if (!token && to.name !== 'Login' && to.name !== 'Register') {
      // token不存在，跳转到登录页
      return { name: 'Login' }
    }
})

//拦截响应码，并显示错误信息



export async function setupRouter(app) {
  app.use(router)
}
