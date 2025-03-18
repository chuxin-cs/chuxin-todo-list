package com.chuxin.springtodolist.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.chuxin.springtodolist.model.entity.TodoList;

public interface TodoListService extends IService<TodoList> {
    public String getTodoLists();
}
