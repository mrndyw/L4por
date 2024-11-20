import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import dashboard from '../views/Dashboard.vue'
import dashboarduser from '../views/Dashboard-user.vue'
import ManageReport from '../views/Manage-report.vue'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/my',
    name: 'dashboarduser',
    component: dashboarduser
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
  {
    path: '/register',
    name: 'register',
    component: register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
