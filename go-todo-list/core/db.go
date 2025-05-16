package core

import (
	"fmt"
	"go-todo-list/config"
	"go-todo-list/model"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

// Connect 数据库连接
func Connect() {
	// 数据账号和密码：root / 123456          go-demo 是数据库名称
	//dsn := "root:123456@tcp(127.0.0.1:3306)/todo-list?charset=utf8mb4&parseTime=True&loc=Local"
	// 从全局配置中获取数据库配置
	dbConfig := config.GlobalConfig.Database

	// 动态生成 DSN
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbConfig.User,
		dbConfig.Password,
		dbConfig.Host,
		dbConfig.Port,
		dbConfig.Name,
	)

	// 连接数据库
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("数据库连接失败: " + err.Error())
	}

	// 全局变量赋值
	DB = db

	// 自动创建表
	err = DB.AutoMigrate(&model.TodoListModel{})
	if err != nil {
		panic("数据库中的表创建失败: " + err.Error())
	}
}
