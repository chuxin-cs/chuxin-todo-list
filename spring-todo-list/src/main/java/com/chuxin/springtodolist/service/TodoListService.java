package com.chuxin.springtodolist.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.chuxin.springtodolist.model.entity.TodoList;

import java.util.List;

public interface TodoListService extends IService<TodoList> {
    List<TodoList> getTodoLists();
    // 新增待办事项
    boolean addTodoList(TodoList todoList);
    // 删除待办事项
    void deleteTodoList(Long id);
    // 修改待办事项
    boolean updateTodoList(TodoList todoList);
    // 获取待办事项详情
    TodoList getTodoListById(Long id);
}
