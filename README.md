# 项目说明

这是一个 Vue 3 + Element Plus + Tailwind CSS 的前端项目，包含：

- 前端与后端对接（API、路由、静态资源）
- Vite 项目搭建
- Vue Router 与 Pinia 使用
- Element Plus 和 Tailwind CSS 配置
- Git 远程仓库管理

---

## 1. 后端对接前端基本规则

- 后端静态目录需正确配置
- 后端路由全部指向 `index.html`
- API 路径与前端保持一致
- Vite `base` 可配置为 `/app/`、`/` 或 空字符串

---

## 2. PowerShell 下 npm 问题修复

如果 `node -v` 正常，但 `npm -v` 不正常：

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 3. 创建 Vite 项目

```bash
npm create vite@latest my-vue-app
```

---

## 4. Vue Router 初始化

安装路由：

```bash
npm install vue-router
```

推荐：

```bash
npm install vue-router@4
```

固定版本示例：

```bash
npm install vue-router@4.3.2
```

示例路由文件 `src/router/router.js`：

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    redirect: { name: 'Home' }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

在 `main.js` 中添加：

```js
import router from './router/router.js'
app.use(router)
```

---

## 5. Pinia 初始化

安装 Pinia：

```bash
npm install pinia@2
```

示例 `src/store/user.js`：

```js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('1111')
  return { token }
})
```

在 `main.js` 中添加：

```js
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
```

---

## 6. Git 远程仓库管理

1. 在 GitHub 上创建一个同名仓库，例如：
   `https://github.com/ing669/testVue3ElementPlusTailwind.git`
2. 在项目目录执行：

```bash
git init
git remote add origin https://github.com/ing669/testVue3ElementPlusTailwind.git
git add .
git commit -m "初始化"
git push origin -f master
```

说明：

- `--global`：全局生效，所有项目使用同一身份
- 不加 `--global`：仅对当前项目生效
- `-f`：强制推送，仅在覆盖远程或修改历史时使用

---

## 7. 安装 Element Plus

```bash
npm install element-plus
npm install @element-plus/icons-vue
```

`main.js` 注册示例：

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

---

## 8. Tailwind CSS 安装与配置

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js` 示例：

```js
export default {
  content: [
    'index.html',
    './src/**/*.{html,js,ts,jsx,tsx,vue}'
  ]
}
```

新建 `src/tailwindcss.css`：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 `main.js` 中引入：

```js
import './tailwindcss.css'
```

完成后重新运行 `npm run dev`，让 Tailwind 配置生效。

---

## 9. Vite ./src 路径 别名配置

`vite.config.js` 示例：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  }
})
```

---

## 10. Pinia 数据持久化

安装插件：

```bash
npm install pinia-plugin-persist
```

`main.js` 配置：

```js
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
```

在 store 中启用持久化：

```js
persist: {
  enabled: true
}
```

---

## 11. 安装 Axios

```bash
npm install axios
```

Axios 直接在组件里导入使用即可，无需在 `main.js` 全局配置。

## 12. 前端项目改名字需要重新运行
```bash
npm install
npm run dev
```

