package router

import (
	"github.com/gin-gonic/gin"
)

func InitTodoListRouter(router *gin.RouterGroup) {
	RouterPub := router.Group("todolist")
	{
		//	todoList 增删改查
		RouterPub.GET("getTodoLists", todoListApi.GetTodoList)
		//RouterPub.GET("getTodoInfo", api.TodoListApi{}.GetTodoList)
		//RouterPub.DELETE("delete", api.TodoListApi{}.GetTodoList)
		//RouterPub.PUT("update", api.TodoListApi{}.GetTodoList)
		//RouterPub.POST("add", api.TodoListApi{}.GetTodoList)
	}
}
