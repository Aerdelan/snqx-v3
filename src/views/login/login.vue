<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-15 21:55:39
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-21 09:38:40
 * @FilePath: \snqx-vue3\src\views\login\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-15 21:55:39
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-20 23:47:55
 * @FilePath: \snqx-vue3\src\views\login\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="bigImg">
      <div class="logo"></div>
      <div class="from">
        <h1>散爆用户登录</h1>
        <input
          type="text"
          autocomplete="off"
          placeholder="手机号码/邮箱"
          class="text"
          v-model="from.account"
        />
        <input
          type="password"
          autocomplete="off"
          placeholder="密码"
          class="password"
          v-model="from.passwd"
        />
        <div class="goLogin" @click="getLogin">登录</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import md5 from "js-md5";
import { login, loginTop } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const from = ref({
  account: "",
  passwd: "",
});
const data = ref({
  account: "",
  passwd: "",
});
const getLogin = async () => {
  //  深拷贝
  data.value.account = JSON.parse(JSON.stringify(from.value.account));
  data.value.passwd = JSON.parse(JSON.stringify(md5(from.value.passwd)));
  console.log(from.value);
  const loginIng = await login(data.value);
  console.log(loginIng.data.access_token);
  localStorage.setItem("token", loginIng.data.data.access_token);
  const loginData = await loginTop();
  console.log(loginData);
  localStorage.setItem("ssh", JSON.stringify(loginData.data.data));
  if (loginIng.data.msg == "OK") {
    from.value = {
      account: "",
      passwd: "",
    };
    router.push("/ssh");
  }
};
</script>
<style lang="scss" scoped>
.bigImg {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(@/assets/iame/user_center_pcbg.jpg) top no-repeat;
  background-size: cover;
  background-color: #eaeaea;
  .logo {
    width: 20%;
    height: 30%;
    background: url(@/assets/iame/logo_1.png) top no-repeat;
    background-size: contain;
    margin-top: 0%;
  }
  .from {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 35%;
    padding: 3%;
    height: 50%;
    max-height: 350px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    margin-top: 20px;
    h1 {
      // margin-bottom: 5%;
      color: #ffc000;
      border-bottom: 3px solid #ffc000;
      min-height: 45px;
    }
    .text {
      background-color: #fff;
      border-radius: 4px;
      color: #606266;
      width: 100%;
      height: 0.8rem;
      // margin-bottom: 0.25rem;
      min-height: 45px;
    }
    .password {
      background-color: #fff;
      border-radius: 4px;
      color: #606266;
      width: 100%;
      height: 0.8rem;
      // margin-bottom: 0.25rem;
      min-height: 45px;
    }
    .goLogin {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffc000;
      border-radius: 4px;
      color: white;
      width: 100%;
      height: 0.8rem;
      font-size: 0.15rem;
      cursor: pointer;
      min-height: 45px;
    }
  }
}
</style>
