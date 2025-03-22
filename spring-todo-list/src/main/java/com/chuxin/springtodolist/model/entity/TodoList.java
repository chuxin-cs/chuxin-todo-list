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
     * 文本内容
     */
    private String text;

    /**
     * 是否完成
     */
    private Integer completed;

    /**
     * 状态 (1-正常 0-禁用)
     */
    private Integer status;

    /**
     * 是否删除(0-否 1-是)
     */
    private Integer isDeleted;
}
