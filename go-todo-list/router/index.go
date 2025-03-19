package router

import (
	"github.com/gin-gonic/gin"
	"go-todo-list/api"
)

// InitRouter 路由初始化
func InitRouter() *gin.Engine {
	// 初始化
	router := gin.New()
	router.Use(gin.Recovery())

	// router 进行分组
	publicGroup := router.Group("")
	{
		// todolist 的路由注册
		InitTodoListRouter(publicGroup)
	}

	// 运行在 9000 端口
	err := router.Run(":9000")
	if err != nil {
		return nil
	}

	// 返回路由
	return router
}

// 全局变量 提升 api
var (
	todoListApi = api.ApiGroupApp.TodoListApi // api.ApiGroup{} // api.TodoListApi{} // api.ApiGroupApp.TodoListApi
)
