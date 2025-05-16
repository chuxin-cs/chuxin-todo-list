package com.chuxin.springtodolist.model.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.chuxin.springtodolist.common.base.BaseEntity;
import lombok.Getter;
import lombok.Setter;

@TableName("todo")
@Getter
@Setter
public class TodoList extends BaseEntity {
    /**
     * 文本内容
     */
    private String name;

    /**
     * 状态 (1-正常 0-禁用)
     */
    private Integer status;
}
