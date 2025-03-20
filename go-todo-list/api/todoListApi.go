package api

import (
	"github.com/gin-gonic/gin"
	"go-todo-list/database"
	"go-todo-list/model"
	"net/http"
)

type TodoListApi struct{}

// GetTodoList 获取 TodoList 列表
func (t *TodoListApi) GetTodoList(c *gin.Context) {
	var userList []model.TodoListModel
	err := database.DB.Find(&userList).Error
	if err != nil {
		panic(err)
	}
	c.JSON(200, gin.H{
		"message": "查询成功！",
		"code":    http.StatusOK,
		"data":    userList,
	})
}

// GetTodoInfo 获取 TodoList 详情
func (t *TodoListApi) GetTodoInfo(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}

// Delete 删除 TodoList
func (t *TodoListApi) Delete(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}

// Update 更新 TodoList
func (t *TodoListApi) Update(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}

// Add 新增 TodoList
func (t *TodoListApi) Add(c *gin.Context) {
	todo := model.TodoListModel{Name: "初心"}
	err := database.DB.Create(&todo).Error
	if err != nil {
		c.JSON(500, gin.H{"error": "创建失败"})
		return
	}

	// 创建成功 把成功的数据返回出去
	c.JSON(200, gin.H{
		"message": "创建成功",
		"code":    http.StatusOK,
		"data":    todo,
	})
}
