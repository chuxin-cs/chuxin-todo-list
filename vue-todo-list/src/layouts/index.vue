<template>
  <div class="common-layout">
    <!-- 主体内容 -->
    <el-container>
      <!-- 菜单栏 -->
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu.vue"
</script>