import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Overview from '../views/main/Overview.vue'
import About from '../views/main/About.vue'
import PageNotFound from '../views/auth/PageNotFound.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
