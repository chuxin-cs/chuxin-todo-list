package com.chuxin.springtodolist.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.chuxin.springtodolist.common.result.Result;
import com.chuxin.springtodolist.model.entity.TodoList;

import java.util.List;

public interface TodoListService extends IService<TodoList> {
    Result<List<TodoList>> getTodoLists();
    // 新增待办事项
    Result<Boolean> addTodoList(TodoList todoList);
    // 删除待办事项
    Result<Boolean> deleteTodoList(Long id);
    // 批量删除待办事项
    Result<Boolean> deleteTodoLists(List<Long> ids);
    // 修改待办事项
    Result<Boolean> updateTodoList(TodoList todoList);
    // 获取待办事项详情
    Result<TodoList> getTodoListById(Long id);
}
