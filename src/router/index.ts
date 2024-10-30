import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  //路由模式hash
  history: createWebHashHistory('/tstemplate/'),
  routes: [
    {
      //登录成功以后展示数据的路由
      path: '/',
      component: () => import('../views/layout/index.vue'),
      name: 'layout'
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue'),
      name: 'login'
    }
  ]
})

export default router
