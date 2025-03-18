package com.chuxin.springtodolist.model.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.chuxin.springtodolist.common.base.BaseEntity;
import lombok.Getter;
import lombok.Setter;

@TableName("todo_list")
@Getter
@Setter
public class TodoList extends BaseEntity {

    /**
     * todo list name
     */
    private String name;
}
