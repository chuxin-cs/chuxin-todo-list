package com.chuxin.springtodolist.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.chuxin.springtodolist.model.entity.TodoList;

import java.util.List;

public interface TodoListService extends IService<TodoList> {
    List<TodoList> getTodoLists();
}
