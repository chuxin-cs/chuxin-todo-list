package main

import (
	"fmt"
	"go-todo-list/config"
	"go-todo-list/database"
	"go-todo-list/router"
)

func main() {
	fmt.Println("go todo list ...")

	// 读取配置
	config.Viper()

	// 初始化数据库
	database.Connect()

	// 初始化路由
	router.InitRouter()
}
