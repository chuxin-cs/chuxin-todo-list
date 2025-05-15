<template>
  <div class="todo-list-container">
    <Item @addTodo="addTodo" />
    <List :list="tableData" @deleteTodo="deleteTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue"
import {query,del} from "@/apis"

import {ITodo} from "./type"
import Item from "./Item.vue"
import List from "./List.vue"

const addTodo = (todo: ITodo) => {
  tableData.value.unshift({
    id: tableData.value.length + 1,
    date: '2016-05-03',
    name: todo.name,
  })
}
const deleteTodo = (row: ITodo) => {
  console.log(row,"==")
  del(row.id).then((res) => {
    getData()
  })
}
const tableData = ref<ITodo[]>([])

const getData = () => {
  query().then((res) => {
    const data = res?.data || {}
    tableData.value = data.data
  })
}


onMounted(() => {
  getData()
})




</script>