package com.chuxin.springtodolist.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.chuxin.springtodolist.mapper.TodoListMapper;
import com.chuxin.springtodolist.model.entity.TodoList;
import com.chuxin.springtodolist.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListServiceImpl extends ServiceImpl<TodoListMapper, TodoList> implements TodoListService {
    // 查询用户列表
    @Override
    public List<TodoList> getTodoLists() {
        // 使用MyBatis-Plus的分页插件实现分页查询
        return this.list();
    }

    // 新增
    @Override
    public boolean addTodoList(TodoList todoList) {
        // 使用MyBatis-Plus的save方法新增记录
        return this.save(todoList);
    }

    // 修改
    @Override
    public boolean updateTodoList(TodoList todoList) {
        // 使用MyBatis-Plus的updateById方法更新记录
        return this.updateById(todoList);
    }

    // 删除
    @Override
    public void deleteTodoList(Long id) {
        // 使用MyBatis-Plus的removeById方法删除记录
        this.removeById(id);
    }
}
