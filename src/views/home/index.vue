<!--
 * @Author: 王业丞 1874863790@qq.com
 * @Date: 2023-04-09 21:03:46
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-04-17 09:08:37
 * @FilePath: \snqx-vue3\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Top></Top>
    <Body></Body>
  </div>
</template>
<script setup>
import { ref, provide } from "vue";
import Top from "@/views/home/top/index.vue";
import Body from "@/views/home/body/index.vue";
</script>
<style lang="scss" scoped></style>