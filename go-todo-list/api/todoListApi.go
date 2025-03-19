package api

import "github.com/gin-gonic/gin"

type TodoListApi struct{}

func (t *TodoListApi) GetTodoList(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world111222"})
}
func (t *TodoListApi) GetTodoInfo(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}
func (t *TodoListApi) Delete(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}
func (t *TodoListApi) Update(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}
func (t *TodoListApi) Add(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hello world"})
}
