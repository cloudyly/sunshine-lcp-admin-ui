import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/pages/layout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'search' }
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/pages/search.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
