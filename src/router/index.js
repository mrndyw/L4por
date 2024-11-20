import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import dashboard from '../views/Dashboard.vue'
import dashboardUser from '../views/DashboardUser.vue'
import ManageReport from '../views/ManageReport.vue'
import register from '../views/Register.vue'
import LandingPage from '../views/landingPage.vue'


const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/my',
    name: 'dashboarduser',
    component: dashboardUser
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
