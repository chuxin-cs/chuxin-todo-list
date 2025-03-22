package com.chuxin.springtodolist.controller;

import cn.hutool.core.lang.Assert;
import com.chuxin.springtodolist.common.result.Result;
import com.chuxin.springtodolist.model.entity.TodoList;
import com.chuxin.springtodolist.service.TodoListService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;

@Tag(name = "todoList")
@RestController
@RequestMapping("/api/todolist")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @GetMapping("/getTodoLists")
    @Operation(summary = "获取todolist列表")
    public Result<List<TodoList>> getTodoLists() {
        Assert.isTrue(true, "用户名已存在");
        return this.todoListService.getTodoLists();
    }

    @GetMapping("/getTodoListById/{id}")
    @Operation(summary = "获取todolist详情")
    public Result<TodoList> getTodoListById(@PathVariable Long id) {
        return this.todoListService.getTodoListById(id);
    }

    @PostMapping("/addTodoList")
    @Operation(summary = "添加todolist")
    public Result<Boolean> addTodoList(@RequestBody TodoList todoList) {
        return this.todoListService.addTodoList(todoList);
    }

    @PutMapping("/updateTodoList")
    @Operation(summary = "修改todolist")
    public Result<Boolean> updateTodoList(@RequestBody TodoList todoList) {
        return this.todoListService.updateTodoList(todoList);
    }

    @DeleteMapping("/deleteTodoList/{id}")
    @Operation(summary = "删除todolist")
    public Result<Boolean> deleteTodoList(@PathVariable Long id) {
        return this.todoListService.deleteTodoList(id);
    }

    @DeleteMapping("/deleteTodoLists")
    @Operation(summary = "批量删除todolist")
    public Result<Boolean> deleteTodoLists(@RequestParam("ids") String idsStr) {
        List<Long> ids = Arrays.stream(idsStr.split(",")).map(Long::parseLong).collect(Collectors.toList());
        return this.todoListService.deleteTodoLists(ids);
    }
}
