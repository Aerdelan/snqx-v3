<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-20 23:50:40
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-20 23:59:58
 * @FilePath: \snqx-vue3\src\views\ssh\ssh.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p>{{ ssh }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const ssh = ref(localStorage.getItem("ssh"));
console.log(ssh.value);
</script>
<style lang=""></style>
