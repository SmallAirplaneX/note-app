import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/page/home/index.vue'),
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
            title:"编辑笔记"
          }
        },
        {
          path: '/editTemplate',
          name: 'editTemplate',
          component: () => import('@/views/EditTemplateView.vue'),
          meta:{
            title:"编辑笔记"
          }
        },
        {
          path: '/manageTemplates',
          name: 'manageTemplates',
          component: () => import('@/views/ManageTemplateView.vue'),
          meta:{
            title:"编辑笔记"
          }
        },
        {
          path: '/editAttribute',
          name: 'editAttribute',
          component: () => import('@/views/EditAttributeView.vue'),
          meta:{
            title:"编辑笔记"
          }
        },
        {
          path: '/manageAttributes',
          name: 'manageAttributes',
          component: () => import('@/views/ManageAttributesView.vue'),
          meta:{
            title:"编辑笔记"
          }
        }
      ],
    },
  ]
})

export default router
