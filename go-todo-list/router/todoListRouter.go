package router

import (
	"github.com/gin-gonic/gin"
)

type TodoListRouter struct{}

func InitTodoListRouter(router *gin.RouterGroup) {
	RouterPub := router.Group("todolist")
	{
		//	todoList 增删改查
		RouterPub.GET("query", todoListApi.Query)
		RouterPub.GET("queryPage", todoListApi.QueryPage)
		RouterPub.GET("getTodoInfo", todoListApi.GetTodoInfo)
		RouterPub.DELETE("del", todoListApi.Delete)
		RouterPub.PUT("update", todoListApi.Update)
		RouterPub.POST("add", todoListApi.Add)
	}
}
