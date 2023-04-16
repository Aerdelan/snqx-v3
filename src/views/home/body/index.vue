<!--
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-11 17:43:26
 * @LastEditors: 王业丞 1874863790@qq.com
 * @LastEditTime: 2023-04-15 23:26:26
 * @FilePath: \snqx-vue3\src\views\home\body\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="big">
      <div class="img">
        <div class="auto">
          <div class="autoBody" @click="getVideo"></div>
          <div class="autoCenter"></div>
          <div class="Dow">
            <div class="left">
              <div class="box3"></div>
            </div>
            <div class="body">
              <div class="Appstore"></div>
              <div class="Android"></div>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </div>
      <div class="img2">
        <div class="leftImg2">
          <swiper :pagination="true" class="mySwiper">
            <swiper-slide v-for="(item, index) in sweripLists" :key="index">
              <a :href="item.JumpUrl"><img :src="item.PicUrl" alt="" /></a
            ></swiper-slide>
          </swiper>
        </div>
        <div class="rightImg2">
          <div class="rightImg2Top">
            <div
              v-for="(item, index) in new1"
              :key="index"
              class="nav"
              @mouseenter="newList(index)"
              :class="curreated == index ? 'active' : ''"
            >
              {{ item.name }}
              <div class="newBig"></div>
            </div>
            <div class="k"></div>
          </div>
          <div class="rightImg2body" v-if="newsData != ''">
            <div class="newData">
              <div>
                <div class="oneNewData">
                  <div class="hot">
                    <p>热点</p>
                  </div>
                  <p class="Title">
                    {{ newsData[0].Title }}
                  </p>
                </div>
                <div
                  class="allNew"
                  v-for="(item, index) in newsData"
                  :key="index"
                >
                  <div class="allNewLeft"></div>
                  <div>
                    <p>{{ item.Title }}</p>
                    <!-- <p>{{ item.Date }}</p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <tq class="tq"></tq>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { homeSwerip, newLists } from "@/api/index.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import tq from "@/views/home/body/tq/index.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";
// import required modules
import { Pagination } from "swiper";
const new1 = ref([{ name: "最新" }, { name: "新闻" }, { name: "公告" }]);
const curreated = ref(0);
const sweripLists = ref([]);
const newData = ref([]);
const newsData = ref([]);
const isShow = ref(false);
const getVideo = () => {
  isShow.value = true;
};
const getSwerip = async () => {
  const sweripList = await homeSwerip();
  const {
    data: { data },
  } = await newLists();
  console.log(data);
  console.log(sweripList);
  newData.value = data;
  newsData.value = data.newest;
  console.log(data.newest[0]);
  sweripLists.value = sweripList.data.data.list;
};
// 移入切换
const newList = (index) => {
  curreated.value = index;
  if (index == 0) {
    newsData.value = newData.value.newest;
  } else if (index == 1) {
    newsData.value = newData.value.news;
  } else {
    newsData.value = newData.value.strategy;
  }
};
onMounted(() => {
  getSwerip();
});
</script>
<style lang="scss" scoped>
@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// 首页第一部分
.img {
  width: 100%;
  height: 11rem;
  background-image: url("@/assets/iame/bg_index_p0916.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .auto {
    position: relative;
    width: 10rem;
    height: 100%;
    height: 100%;
    margin: 0 auto;
    // 下载样式
    .Dow {
      position: absolute;
      display: flex;
      padding: 15px;
      border: 1px solid hsla(0, 0%, 100%, 0.25);
      background-color: rgba(0, 0, 0, 0.25);
      width: 70%;
      height: 100px;
      margin: 0 auto;
      bottom: 5%;
      left: 50%;
      -webkit-transform: translate(-50%);
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      .left {
        position: relative;
        width: 30%;
        height: 100%;
        background: url(@/assets/iame/4c2b70c0faee0aa07b9766d1f9ddbf3a.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .box3 {
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 6px #c01f1f, 0 0 7px #c01f1f, 0 0 8px #c01f1f,
          0 0 9px #c01f1f;
        left: 50%;
        -webkit-transform: translate(-50%);
        bottom: -30px;
        width: 100%;
        height: 2px;
        animation: move2 3s alternate linear infinite;
      }
      @keyframes move2 {
        0% {
          bottom: 0px;
        }
        100% {
          bottom: 100px;
        }
      }
      .body {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 40%;
        justify-content: space-between;
        .Appstore {
          width: 100%;
          height: 150%;
          background-image: url(@/assets/iame/download_ios.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .Android {
          width: 100%;
          height: 150%;
          background-image: url(@/assets/iame/download_android.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
      .right {
        width: 30%;
        height: 100%;
        background-image: url(@/assets/iame/download_BETA.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    video {
      // z-index: 100;
    }
    .autoBody {
      position: absolute;
      width: 2rem;
      height: 2rem;
      background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/mobile/circle.png)
        top no-repeat;
      background-position: center;
      top: 50%;
      left: 40%;
      line-height: 2rem;
      animation: move 3s linear infinite;
      z-index: 98;
      cursor: pointer;
    }
    .autoCenter {
      width: 2rem;
      height: 2rem;
      background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/mobile/video.png)
        top no-repeat;
      background-size: 100%;
      position: absolute;
      top: 50%;
      left: 40%;
    }
  }
}
// 首页第一部分结束

// 首页第二部分
.img2 {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 11rem;
  align-items: center;
  background-image: url("@/assets/iame/bg_index2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .leftImg2 {
    position: relative;
    width: 40%;
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 200px;

    background-image: url(@/assets/iame/banner_box.png);
    .mySwiper {
      position: absolute;
      width: 90%;
      height: 83%;
      bottom: 9%;
      left: 5%;
    }
  }
  .rightImg2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 37%;
    height: 50%;
    padding: 20px;
    padding-top: 0;
    margin-top: 200px;
    color: rgb(211, 210, 210);
    background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/news_box.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    .rightImg2Top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 0.3rem;
      .k {
        width: 40%;
      }
      .nav {
        width: 30%;
        height: 100%;
        text-align: center;
        z-index: 10;
        line-height: 50px;
      }
    }
    .rightImg2body {
      width: 100%;
      display: flex;
      flex-direction: column;
      .newData {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .allNew {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.1rem;
          font-size: 0.25rem;
          cursor: pointer;
          // justify-content: space-between;
          div:nth-child(2) {
            display: flex;
            align-items: center;
            // justify-content: space-between;
            p:nth-child(2) {
              font-size: 10px;
              color: orange;
            }
          }

          .allNewLeft {
            width: 11.5%;
            height: 20px;
            background: url(@/assets/iame/精灵图.png) 50% no-repeat;
            background-position-x: 0;
            margin-right: 2%;
          }
        }
        .oneNewData {
          width: 100%;
          height: 50px;
          display: flex;
          line-height: 54px;
          align-items: center;
          // text-align: center;
          // display: block;
          cursor: pointer;
          background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/new_item_bg.png)
            no-repeat;
          .Title {
            width: 100%;
            height: 100%;
            color: #0ff;
            font-size: 0.4rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            padding: 0 8px;
          }
          .hot {
            width: 10%;
            height: 50%;
            line-height: 50%;
            text-align: center;
            color: #fff;
            font-size: 16px;
            position: relative;
            display: flex;
            background-color: #e60012;
            font-style: normal;
            margin-left: 0.5rem;
            color: white;
            align-items: center;

            p {
              font-size: 0.1rem;
              margin-left: 15%;
            }
          }
        }
      }
    }
  }
}
// 第二部分结束
// 第三部分
.tq {
  width: 100%;
  height: 11rem;
}
.active {
  width: 30%;
  background-image: url(@/assets/iame/new_nav_bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: black !important;
}

// 轮播图css
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 50%;
  object-fit: cover;
}
</style>
