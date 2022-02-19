import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'BookList',
        component: () => import('../views/BookList.vue')
    },
    {
        path: '/book/:id',
        name: 'BookDetail',
        component: () => import('../views/BookDetail.vue'),
        props: true
    },
    {
        path: '/cart',
        name: 'CartList',
        component: () => import('../views/CartList.vue')
    },
    {
        path: '/thanks',
        name: 'Thanks',
        component: () => import('../views/Thanks.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
