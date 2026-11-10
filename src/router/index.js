
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: () => import('../views/QuotesView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
