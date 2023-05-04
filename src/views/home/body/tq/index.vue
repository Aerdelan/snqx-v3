<!--
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-13 22:34:26
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-20 21:15:45
 * @FilePath: \snqx-vue3\src\views\home\body\tq\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="snImage">
      <div
        class="big"
        v-for="(item, index) in imgList"
        :key="index"
        :class="{ active: imgNum == index }"
      >
        <div class="ar">
          <img :src="item.img1" alt="" class="sweripImg1" />
          <img :src="item.img2" alt="" class="sweripImg2" />
          <img :src="item.img3" alt="" class="sweripImg3" />
          <img :src="item.img4" alt="" class="sweripImg4" />
          <p class="p">
            <span></span>
            {{ item.p1 }}
            <br />
            {{ item.p2 }}
          </p>
        </div>
      </div>
      <div class="qh">
        <div class="Progressive">
          <div v-for="(item, index) in imgList" :key="index">
            <img
              :src="item.img5"
              alt=""
              class="sweripImg5"
              @click="getImg(index)"
              style="filter: brightness({num})"
              :class="{ active2: imgNum == index }"
            />
          </div>
        </div>

        <div>
          <div class="button1" @click="left"></div>
          <div class="button2" @click="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const imgList = ref([
  {
    img1: require("../../../../assets/iame/doll_1.png"),
    img2: require("../../../../assets/iame/gun_1.png"),
    img3: require("../../../../assets/iame/name_1.png"),
    img4: require("../../../../assets/iame/role_1.png"),
    p1: "春田：指挥官，春田能为您做什么.",
    p2: "请随时吩咐。",
    img5: require("../../../../assets/iame/icon_1.png"),
  },
  {
    img1: require("../../../../assets/iame/doll_2.png"),
    img2: require("../../../../assets/iame/gun_1.png"),
    img3: require("../../../../assets/iame/name_2.png"),
    img4: require("../../../../assets/iame/role_2.png"),
    p1: " Kar98k：毛瑟98K，为您效劳。",
    p2: " 让我为您扫除前方的障碍吧~",
    img5: require("../../../../assets/iame/icon_2.png"),
  },
  {
    img1: require("../../../../assets/iame/doll_3.png"),
    img2: require("../../../../assets/iame/gun_3.png"),
    img3: require("../../../../assets/iame/name_3.png"),
    img4: require("../../../../assets/iame/role_3.png"),
    p1: "M4A1：指挥官吗，接下来……",
    p2: " 就拜托您了。",
    img5: require("../../../../assets/iame/icon_3.png"),
  },
  {
    img1: require("../../../../assets/iame/doll_4.png"),
    img2: require("../../../../assets/iame/gun_3.png"),
    img3: require("../../../../assets/iame/name_4.png"),
    img4: require("../../../../assets/iame/role_4.png"),
    p1: "M4 SOPMOD II：",
    p2: "指挥官，这次要玩什么啊？",
    img5: require("../../../../assets/iame/icon_4.png"),
  },
  {
    img1: require("../../../../assets/iame/doll_5.png"),
    img2: require("../../../../assets/iame/gun_3.png"),
    img3: require("../../../../assets/iame/name_5.png"),
    img4: require("../../../../assets/iame/role_5.png"),
    p1: " HK416：指挥官，有我在就足够了。",
    p2: "",
    img5: require("../../../../assets/iame/icon_5.png"),
  },
  {
    img1: require("../../../../assets/iame/doll_6.png"),
    img2: require("../../../../assets/iame/gun_3.png"),
    img3: require("../../../../assets/iame/name_6.png"),
    img4: require("../../../../assets/iame/role_6.png"),
    p1: "AUG：指挥官，很多行动要是过于冲动，",
    p2: " 就再也没有反悔的机会了。",
    img5: require("../../../../assets/iame/icon_6.png"),
  },
]);
const imgNum = ref(0);
const num = ref(50 + "%");
const left = () => {
  if (imgNum.value > 0) {
    imgNum.value--;
  } else {
    imgNum.value = imgList.value.length - 1;
  }

  console.log(imgNum.value);
};
const right = () => {
  if (imgNum.value < imgList.value.length - 1) {
    imgNum.value++;
  } else {
    imgNum.value = 0;
  }

  console.log(imgNum.value);
};
const getImg = (index) => {
  imgNum.value = index;
};
</script>
<style lang="scss" scoped>
.snImage {
  position: relative;
  width: 100%;
  height: 11rem;
  background-image: url("@/assets/iame/bg_index3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .button1 {
    left: -60px;
    background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/character/arrows.png)
      0 0 no-repeat;
    width: 40px;
    height: 70px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;
    z-index: 100;
  }
  .button2 {
    right: -60px;
    background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/character/arrows.png)
      100% 0 no-repeat;
    width: 40px;
    height: 70px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;
    z-index: 100;
  }
  .button1:hover {
    background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/character/arrows.png)
      0% 100% no-repeat;
  }
  .button2:hover {
    background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/character/arrows.png)
      100% 100% no-repeat;
  }
  .qh {
    width: 50%;
    height: 15%;
    background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/character/icon_bg.png)
      0 no-repeat;
    z-index: 100;
    padding: 5px 0;
    position: absolute;
    bottom: 0;
    left: 15%;
    .Progressive {
      display: flex;
      width: 100%;
      transition: all 1s;
      vertical-align: middle;
      font-weight: normal;
      z-index: 1;
      .sweripImg5 {
        // position: absolute;
        // width: 25%;
        filter: brightness(50%);
      }
    }
  }
  .big {
    width: 100%;
    height: 80%;
    margin: 0 auto;
    display: none;
    z-index: 1;
  }
  .ar {
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 10%;
    margin: 0 auto;
    z-index: 1;
    .p {
      font-size: 16px;
      color: #fff;
      line-height: 30px;
      padding-left: 10px;
      position: absolute;
      left: 30%;
      top: 75%;
      width: 50%;
    }
    .sweripImg1 {
      position: absolute;
      left: 12%;
      top: 40%;
      width: 20%;
    }
    .sweripImg2 {
      position: absolute;
      left: 2%;
      top: 25%;
      width: 10%;
    }
    .sweripImg3 {
      position: absolute;
      left: 30%;
      top: 50%;
      width: 30%;
    }
    .sweripImg4 {
      position: absolute;
      right: 0;
      top: 15%;
      width: 50%;
    }
  }
}
.active {
  display: block !important;
}
.active2 {
  filter: brightness(100%) !important;
}
</style>
