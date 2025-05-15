<template>
  <el-menu :default-active="defaultActive" class="el-menu-vertical-demo">
    <el-menu-item index="base">
      <span>BaseTodoList</span>
    </el-menu-item>  
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"

const defaultActive = ref("base")
</script>