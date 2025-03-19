package com.chuxin.springtodolist.model.vo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class TodoListVO {
    @Schema(description = "todolist id")
    private Long id;

    @Schema(description = "todolist name")
    private String name;

    @Schema(description = "创建时间")
    @JsonFormat(pattern = "yyyy/MM/dd HH:mm")
    @TableField("create_time")
    private LocalDateTime createTime;

    @Schema(description = "更新时间")
    @JsonFormat(pattern = "yyyy/MM/dd HH:mm")
    @TableField("update_time")
    private LocalDateTime updateTime;
}
