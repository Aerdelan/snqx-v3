import request from "@/utils/index";
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
