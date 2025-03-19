package com.chuxin.springtodolist;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.chuxin.springtodolist.mapper")
public class SpringTodoListApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringTodoListApplication.class, args);
    }

}
