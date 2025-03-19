package com.chuxin.springtodolist.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.chuxin.springtodolist.model.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TodoListMapper extends BaseMapper<TodoList> {

    @Select("select * from todo_list")
    List<TodoList> getTodoList();
}
