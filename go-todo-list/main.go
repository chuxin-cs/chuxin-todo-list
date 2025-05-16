package main

import (
	"go-todo-list/config"
	"go-todo-list/core"
	_ "go-todo-list/docs" // 新增文档导入
	"go-todo-list/router"
)

// @title TodoList API
// @version 1.0
// @description This is a todo list server
// @host localhost:8000
// @BasePath /
func main() {
	// 1、读取配置
	config.LoadConfig()

	// 2、初始化数据库
	core.Connect()

	// 3、初始化路由
	router.InitRouter()
}
