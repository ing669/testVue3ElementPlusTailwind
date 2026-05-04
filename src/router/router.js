import { createRouter, createWebHistory } from 'vue-router'

// 定义路由配置
const routes = [
  {
    path: '/home',
    redirect: { name: 'Home' } // 重定向到 Home 页面
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue') // 懒加载
  }
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导出路由实例
export default router