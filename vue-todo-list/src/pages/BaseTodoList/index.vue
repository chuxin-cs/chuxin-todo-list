<template>
  <div class="todo-list-container">
    <Item @addTodo="addTodo" />
    <List :list="tableData" />
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue"

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
onMounted(() => {
  console.log('onMounted')
})
const tableData = ref<ITodo[]>([{
  id: 1,
  date: '2016-05-03',
  name: 'Tom',
}])

</script>