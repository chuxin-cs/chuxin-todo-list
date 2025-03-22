package com.chuxin.springtodolist.controller;

import com.chuxin.springtodolist.model.entity.TodoList;
import com.chuxin.springtodolist.service.TodoListService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "todoList")
@RestController
@RequestMapping("/todolist")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @GetMapping("/getTodoLists")
    @Operation(summary = "获取todolist列表")
    public List<TodoList> getTodoLists() {
        return this.todoListService.getTodoLists();
    }

    @PostMapping("/addTodoList")
    @Operation(summary = "添加todolist")
    public boolean addTodoList(@RequestBody TodoList todoList) {
        return this.todoListService.addTodoList(todoList);
    }

    @PutMapping("/updateTodoList")
    @Operation(summary = "修改todolist")
    public boolean updateTodoList(@RequestBody TodoList todoList) {
        return this.todoListService.updateTodoList(todoList);
    }

    @DeleteMapping("/deleteTodoList/{id}")
    @Operation(summary = "删除todolist")
    public void deleteTodoList(@PathVariable Long id) {
        this.todoListService.deleteTodoList(id);
    }
}
