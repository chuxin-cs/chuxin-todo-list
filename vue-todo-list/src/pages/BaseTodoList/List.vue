<template>
  <el-table row-key="date" :data="list" style="width: 100%">
    <el-table-column prop="name" label="事项" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column prop="updateTime" label="更新时间" />
    <el-table-column>
      <template #default="scope">
        <el-button size="small" type="danger" text @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, defineProps,defineEmits } from 'vue'

import {ITodo} from "./type"

const props = defineProps<{
  list: ITodo[]
}>()
const emits = defineEmits(['deleteTodo']);

const handleDelete = (row) => {
  emits("deleteTodo",row)
}

</script>