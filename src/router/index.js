import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/page/index.vue'),
      meta:{
        title:"Home"
      },
      children: [
        {
          path: '/notes',
          name: 'Notes',
          component: () => import('@/views/page/notes/index.vue'),
          meta:{
            title:"笔记管理"
          }
        },
        {
          path: '/templates',
          name: 'Templates',
          component: () => import('@/views/page/templates/index.vue'),
          meta:{
            title:"模板管理"
          }
        },
        {
          path: '/attributes',
          name: 'Attributes',
          component: () => import('@/views/page/attributes/index.vue'),
          meta:{
            title:"属性管理"
          }
        }
      ],
    },
  ]
})



export default router
