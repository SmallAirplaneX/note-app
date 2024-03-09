import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './basic-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes
})

export async function setupRouter(app) {
  app.use(router)
}
