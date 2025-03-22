package router

import (
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"go-todo-list/api"
	"go-todo-list/middleware"

	"github.com/gin-gonic/gin"
)

// InitRouter 路由初始化
func InitRouter() *gin.Engine {
	// 初始化
	router := gin.New()
	router.Use(gin.Recovery())
	router.Use(gin.Logger())
	router.Use(middleware.CORSMiddleware())

	// swagger
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// router 进行分组
	publicGroup := router.Group("/api")
	{
		InitTodoListRouter(publicGroup) // todolist 的路由注册
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
	todoListApi = api.ApiGroupApp.TodoListApi
)
