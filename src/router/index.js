import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/loginold',
      name: 'loginold',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AILoginView.vue')
    },

    {
      path: '/directory',
      name: 'directory',
      component: () => import('../views/DirectoryView.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
