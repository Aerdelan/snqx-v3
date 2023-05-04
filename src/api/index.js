/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-13 14:35:56
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-20 23:48:57
 * @FilePath: \snqx-vue3\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request, request2 } from "@/utils/index";
// 首页轮播
export const homeSwerip = () => {
    return request({
        url: 'rotation',
        method: 'GET',
    })
}
// 新闻接口
// 首页轮播
export const newLists = () => {
    return request({
        url: 'news_index_list',
        method: 'GET',
    })
}
export const login = (data) => {
    return request2({
        url: '/login',
        method: 'POST',
        data: data,
        // headers: [`Authorization :  "Bearer " + ${localStorage.getItem('token')}`]
    })
}

// 获取登录返回信息
export const loginTop = (data) => {
    return request2({
        url: '/user_info',
        method: 'POST',
        data: data,
        // headers: [`Authorization :  "Bearer " + ${localStorage.getItem('token')}`]
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    })
}
