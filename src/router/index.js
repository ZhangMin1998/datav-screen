import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Screen/Home.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/components/JiangSuMap/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
