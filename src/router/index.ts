import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/pages/layout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'test-schema' }
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/pages/search.vue')
      },
      {
        path: 'test-schema',
        name: 'test-schema',
        component: () => import('@/pages/develop-mgr/test-schema.vue')
      },
      {
        path: 'designer',
        name: 'designer',
        component: () => import('@/pages/develop-mgr/designer.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
