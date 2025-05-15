<template>
  <el-table row-key="date" :data="list" style="width: 100%">
    <el-table-column prop="name" label="事项" />
    <el-table-column prop="date" label="创建时间" />
    <el-table-column prop="date" label="更新时间" />
    <el-table-column>
      <template #default="scope">
        <el-button size="small" type="danger" text>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import type { TableColumnCtx, TableInstance } from 'element-plus'

import {ITodo} from "./type"

const props = defineProps<{
  list: ITodo[]
}>()

</script>