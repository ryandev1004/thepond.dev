import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Overview from '../views/main/Overview.vue'
import Projects from '../components/Projects.vue'
import Contact from '../views/main/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
