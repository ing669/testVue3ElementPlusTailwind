import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义一个名为 'user' 的 Pinia store
export const useUserStore = defineStore('user', () => {
  // 定义一个响应式的 token 变量
  const token = ref("pinia_token")

  // 返回 token 变量，使其在组件中可用
  return { token }
})