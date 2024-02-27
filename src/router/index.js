import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/page/index.vue'),
      meta:{
        title:"管理"
      },
      children: [
        {
          path: '/editNote',
          name: 'editNote',
          component: () => import('@/views/EditNoteView.vue'),
          meta:{
            title:"编辑笔记"
          }
        },
        {
          path: '/manageNotes',
          name: 'manageNotes',
          component: () => import('@/views/ManageNotesView.vue'),
          meta:{
            title:"主题管理"
          }
        },
        {
          path: '/manageTemplates',
          name: 'manageTemplates',
          component: () => import('@/views/ManageTemplateView.vue'),
          meta:{
            title:"模板管理"
          }
        },
        {
          path: '/manageAttributes',
          name: 'manageAttributes',
          component: () => import('@/views/ManageAttributesView.vue'),
          meta:{
            title:"属性管理"
          }
        }
      ],
    },
  ]
})



export default router
