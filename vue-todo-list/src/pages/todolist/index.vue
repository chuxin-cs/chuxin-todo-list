<template>
  <div class="todo-list-container">
    <Item @addTodo="addTodo" />
    <List :list="tableData" @deleteTodo="deleteTodo" @editTodo="editTodo" />
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
import { ref,onMounted } from "vue"
import {query,delTodo,add} from "@/apis/todolist"

import {ITodo} from "./type"
import Item from "./Item.vue"
import List from "./List.vue"

const addTodo = async (todo: ITodo) => {
  await add({name: todo.name})
  getData()
}
const deleteTodo = (row: ITodo) => {
  delTodo({id:row.id}).then((res) => {
    getData()
  })
}
const tableData = ref<ITodo[]>([])

const getData = () => {
  query().then((res) => {
    tableData.value = res || []
  })
}

const editTodo = ()=>{

}

onMounted(() => {
  getData()
})
</script>