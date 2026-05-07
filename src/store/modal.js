import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义一个名为 'modal' 的 Pinia store
export const useModalStore = defineStore('modal', () => {

  // 注册弹窗是否可见
  const regVisible = ref(false)
  // 登录弹窗是否可见
  const loginVisible = ref(false)

  // 切换注册弹窗可见性函数
  const switchRegVisible = () => {
    regVisible.value = !regVisible.value
  }

  // 切换登录弹窗可见性函数
  const switchLoginVisible = () => (loginVisible.value = !loginVisible.value)

  return { 
    regVisible, loginVisible, switchRegVisible, switchLoginVisible, 
  };
});