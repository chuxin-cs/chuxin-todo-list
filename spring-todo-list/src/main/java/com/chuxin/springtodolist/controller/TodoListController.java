package com.chuxin.springtodolist.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todolist")
public class TodoListController {

    @GetMapping("/getList")
    public String getList() {
        return "getList";
    }

}
