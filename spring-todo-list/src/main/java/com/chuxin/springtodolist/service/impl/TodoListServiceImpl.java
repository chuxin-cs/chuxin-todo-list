package com.chuxin.springtodolist.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.chuxin.springtodolist.common.result.Result;
import com.chuxin.springtodolist.mapper.TodoListMapper;
import com.chuxin.springtodolist.model.entity.TodoList;
import com.chuxin.springtodolist.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListServiceImpl extends ServiceImpl<TodoListMapper, TodoList> implements TodoListService {
    // 查询列表
    @Override
    public Result<List<TodoList>> getTodoLists() {
        // 使用MyBatis-Plus的分页插件实现分页查询
        List<TodoList> todoList = this.list();
        if (todoList != null && !todoList.isEmpty()) {
            return Result.success(todoList);
        } else {
            return Result.failed("查询列表失败");
        }
    }

    // 查询详情
    @Override
    public Result<TodoList> getTodoListById(Long id) {
        // 使用MyBatis-Plus的getById方法根据ID查询记录
        TodoList todoList = this.getById(id);
        if (todoList != null) {
            return Result.success(todoList);
        } else {
            return Result.failed("用户查询失败");
        }
    }

    // 新增
    @Override
    public Result<Boolean> addTodoList(TodoList todoList) {
        // 使用MyBatis-Plus的save方法新增记录
        boolean result = this.save(todoList);
        if (result) {
            return Result.success(true);
        } else {
            return Result.failed("新增待办事项失败");
        }
    }

    // 修改
    @Override
    // 原代码中 Result<boolean> 存在语法错误，Java 泛型中不能使用基本数据类型 boolean，需要使用其包装类 Boolean
    public Result<Boolean> updateTodoList(TodoList todoList) {
        // 使用MyBatis-Plus的updateById方法更新记录
        boolean result = this.updateById(todoList);
        if (result) {
            return Result.success(true);
        } else {
            return Result.failed("更新待办事项失败");
        }
    }

    // 删除
    @Override
    public Result<Boolean> deleteTodoList(Long id) {
        // 使用MyBatis-Plus的removeById方法删除记录
        boolean result = this.removeById(id);
        if (result) {
            return Result.success(true);
        } else {
            return Result.failed("删除待办事项失败");
        }
    }

    // 批量删除
    @Override
    public Result<Boolean> deleteTodoLists(List<Long> ids) {
        // 使用MyBatis-Plus的removeByIds方法批量删除记录
        boolean result = this.removeByIds(ids);
        if (result) {
            return Result.success(true);
        } else {
            return Result.failed("批量删除待办事项失败");
        }
    }
}
