import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import dashboard from '../views/Dashboard.vue'
import ManageReport from '../views/Manage-report.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/manage-report',
    name: 'ManageReport',
    component: ManageReport
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
