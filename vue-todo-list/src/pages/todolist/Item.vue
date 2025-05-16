<template>
  <el-form :inline="true" :model="formInline">
    <el-form-item label="">
      <el-input v-model="formInline.name" width="200px" placeholder="请输入待办事项" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive,defineEmits} from 'vue'

const emit = defineEmits(['addTodo']);

const formInline = reactive({
  name: '',
})

const onSubmit = () => {
  emit('addTodo', formInline);
  formInline.name = '';
}
</script>