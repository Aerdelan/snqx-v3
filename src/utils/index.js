/*
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-13 14:36:13
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-20 22:44:27
 * @FilePath: \snqx-vue3\src\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://gfcn-webserver.sunborngame.com/website'
})
const request2 = axios.create({
    baseURL: 'https://plateuser-web.sunborngame.com/web'
})
export{ request,request2}