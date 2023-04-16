/*
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-08 23:23:45
 * @LastEditors: 王业丞 1874863790@qq.com
 * @LastEditTime: 2023-04-14 11:50:46
 * @FilePath: \snqx-vue3\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// px2rem 自适应
import 'lib-flexible'
import 'amfe-flexible'
import 'normalize.css/normalize.css'
// 1. 重置样式的库
import 'normalize.css'
// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.scss'
// 轮播组件
// Import Swiper styles
import 'swiper/css';
createApp(App).use(store).use(router).mount('#app')
