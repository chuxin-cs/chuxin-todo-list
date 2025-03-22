package main

import (
	"fmt"
	"go-todo-list/config"
	"go-todo-list/database"
	_ "go-todo-list/docs" // 新增文档导入
	"go-todo-list/router"
)

// @title TodoList API
// @version 1.0
// @description This is a todo list server
// @host localhost:8080
// @BasePath /
func main() {
	fmt.Println("go todo list ...")

	// 读取配置
	config.Viper()

	// 初始化数据库
	database.Connect()

	// 初始化路由
	router.InitRouter()
}
