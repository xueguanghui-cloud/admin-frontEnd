import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home/home.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
