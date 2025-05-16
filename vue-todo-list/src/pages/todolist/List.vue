<template>
  <el-table row-key="date" :data="list" style="width: 100%">
    <el-table-column prop="name" label="事项" />
    <el-table-column prop="createTime" label="创建时间" :formatter="(row)=>formatter(row, 'createTime')" />
    <el-table-column prop="updateTime" label="更新时间" :formatter="(row)=>formatter(row, 'updateTime')" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" text @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="small" type="danger" text @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { ref, defineProps,defineEmits } from 'vue'

import {ITodo} from "./type"

const props = defineProps<{
  list: ITodo[]
}>()
const emits = defineEmits(['deleteTodo', 'editTodo']);

const handleDelete = (row) => {
  emits("deleteTodo",row)
}

const formatter= (row,key)=>{
  return dayjs(row[key]).format("YYYY-MM-DD HH:mm:ss")
}

const handleEdit = (row) => {
  emits("editTodo",row)
}

</script>