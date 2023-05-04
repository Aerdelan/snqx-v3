/*
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-08 23:23:45
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-23 09:54:45
 * @FilePath: \snqx-vue3\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/ssh',
    name: 'ssh',
    component: () => import('@/views/ssh/ssh.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
