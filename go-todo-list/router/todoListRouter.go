package router

import (
	"github.com/gin-gonic/gin"
)

type TodoListRouter struct{}

func InitTodoListRouter(router *gin.RouterGroup) {
	RouterPub := router.Group("todolist")
	{
		//	todoList 增删改查
		RouterPub.GET("getTodoLists", todoListApi.GetTodoList)
		RouterPub.GET("getTodoInfo", todoListApi.GetTodoInfo)
		RouterPub.DELETE("delete", todoListApi.Delete)
		RouterPub.PUT("update", todoListApi.Update)
		RouterPub.POST("add", todoListApi.Add)
	}
}
