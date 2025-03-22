package com.chuxin.springtodolist.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.chuxin.springtodolist.model.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoListMapper extends BaseMapper<TodoList> {
}
