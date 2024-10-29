import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  //路由模式hash
  history: createWebHashHistory('/tstemplate/'),
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
    }
  ]
})

export default router
