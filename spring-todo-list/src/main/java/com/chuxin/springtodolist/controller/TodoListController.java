package com.chuxin.springtodolist.controller;

import com.chuxin.springtodolist.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todolist")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @GetMapping("/getTodoLists")
    public String getTodoLists() {
        return this.todoListService.getTodoLists();
    }

}
