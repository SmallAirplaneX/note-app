import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/editNote',
      name: 'editNote',
      component: () => import('@/views/EditNoteView.vue')
    },
    {
      path: '/manageNotes',
      name: 'manageNotes',
      component: () => import('@/views/ManageNotesView.vue')
    },
    {
      path: '/editTemplate',
      name: 'editTemplate',
      component: () => import('@/views/EditTemplateView.vue')
    },
    {
      path: '/manageTemplates',
      name: 'manageTemplates',
      component: () => import('@/views/ManageTemplateView.vue')
    },
    {
      path: '/editAttribute',
      name: 'editAttribute',
      component: () => import('@/views/EditAttributeView.vue')
    },
    {
      path: '/manageAttributes',
      name: 'manageAttributes',
      component: () => import('@/views/ManageAttributesView.vue')
    }
  ]
})

export default router
