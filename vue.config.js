/*
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-08 23:23:45
 * @LastEditors: 王业丞 1874863790@qq.com
 * @LastEditTime: 2023-04-09 21:47:56
 * @FilePath: \snqx-vue3\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // loaderOptions: {
  //   css: {},
  //   postcss: {
  //     plugins: [
  //       require('postcss-px2rem')({
  //         // 以设计稿750为例， 750 / 10 = 75
  //         remUnit: 54
  //       }),
  //     ]
  //   }
  // }
})
