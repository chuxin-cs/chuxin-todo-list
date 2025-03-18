package com.chuxin.springtodolist.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.chuxin.springtodolist.mapper.TodoListMapper;
import com.chuxin.springtodolist.model.entity.TodoList;
import com.chuxin.springtodolist.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListServiceImpl extends ServiceImpl<TodoListMapper, TodoList> implements TodoListService {

    @Autowired
    private TodoListMapper todoListMapper;

    @Override
    public String getTodoLists() {
        return "11111";
    }
}
