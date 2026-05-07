import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useModalStore } from './modal'

// 定义一个名为 'user' 的 Pinia store
export const useUserStore = defineStore('user', () => {
  // 当前登录用户名称
  const currentUser = ref("")
  // 是否登录
  const isLogin = ref(false)
  // 注册的用户信息
  const users = ref({
    "account": "",
    "password": ""
  })

  const module = useModalStore()

  // 登录函数
  const login = (account, password) => {
    const foundUser = users.value.account === account && users.value.password === password
    // 
    if (foundUser) {
        ElMessage({
            message: "登录成功",
            type: "success",
        })
        isLogin.value = true
        currentUser.value = foundUser.account
        module.switchLoginVisible()
    } else {
        ElMessage({
            message: "账号或密码错误",
            type: "warning",
        })
    }
  }

  // 退出登录函数
  const logout = () => {
    currentUser.value = ""
    isLogin.value = false
  }

  // 注册更新用户信息函数
  const register = (account, password) => {
    users.value = { account, password }
    isLogin.value = true
  }

  return { currentUser, isLogin, users, login, register, logout };
},
{
  persist: {
    enabled: true, // store 数据持久化生效,刷新浏览器不会丢失数据
  },
}
);