<!--
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-09 21:16:17
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-21 00:21:49
 * @FilePath: \snqx-vue3\src\views\home\top\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="topBig">
      <div class="body">
        <div class="List">
          <img
            src="https://gf-cn.cdn.sunborngame.com/website/img_web/logo.png"
            alt="少女前线"
          />
          <div
            v-for="(item, index) in topList"
            :key="index"
            :class="typeId == index ? 'active' : ''"
            class="aList"
            @click="yellow(index)"
          >
            {{ item.data }}
          </div>
          <div dclass="nav_btn_t">
            <router-link to="/login">
              <a href="" target="blank" class="login">登录</a>
            </router-link>

            <a
              href="https://gfcn-center.sunborngame.com/?type_num=2"
              target="blank"
              class="logon"
              >注册</a
            >
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 顶部active
const typeId = ref(0);
const topList = ref([
  {
    data: "首页",
  },
  {
    data: "情报局",
  },
  {
    data: "图签",
  },
  {
    data: "图册",
  },
  {
    data: "世界观",
  },
  {
    data: "世界线",
  },
  {
    data: "16Lab",
  },
]);
// 移入切换
const yellow = (index) => {
  typeId.value = index;
  console.log(index);
};
const login = () => {
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.topBig {
  width: 100%;
  height: 2rem;
  background-color: rgb(25, 25, 25);
  .body {
    line-height: 2rem;
    width: 100%;
    height: 2rem;
    display: block;
  }
  // 头部列表样式
  .active {
    position: absolute;
    float: left;
    bottom: 0;
    border-bottom: 0.1rem solid rgb(255, 192, 0);
    border-left: 0.2rem solid transparent;
    border-right: 0.2rem solid transparent;
    width: 0.2rem;
    color: rgb(255, 192, 0) !important;
  }
  .List {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    div {
      font-size: 1.5vw;
    }

    .aList {
      position: relative;
      height: 1.8rem;
      line-height: 1.8rem;
      text-align: center;
      width: 2rem;
      cursor: pointer;
      color: #ccc;
    }
    img {
      width: 2.5rem;
    }
    // 头部登录注册样式
    a {
      text-decoration: none;
      color: white;
      width: 5rem;
      height: 2rem;
      line-height: 2rem;
      padding: 6px 10px;
      text-align: center;
      background: url(https://gf-cn.cdn.sunborngame.com/website/img_web/btn_bg1.png)
        no-repeat;
      cursor: pointer;
      font-size: 1vw;
    }
  }
  .login {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  // 登陆注册样式结束
}
// 头部列表梯形样式

// 梯形样式结束
</style>
