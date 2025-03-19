package com.chuxin.springtodolist.controller;

import com.chuxin.springtodolist.model.entity.TodoList;
import com.chuxin.springtodolist.model.vo.TodoListVO;
import com.chuxin.springtodolist.service.TodoListService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
