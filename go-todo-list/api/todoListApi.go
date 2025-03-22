package api

import (
	"go-todo-list/database"
	"go-todo-list/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

type TodoListApi struct{}

// GetTodoList 获取 TodoList 列表
// @Summary 获取待办列表
// @Description 获取分页的待办事项列表
// @Tags TodoList
// @Produce json
// @Param page query int false "页码"
// @Param page_size query int false "每页数量"
// @Success 200 {object} model.TodoListModel
// @Failure 500 {object} map[string]interface{}
// @Router /todolist/getTodoLists [get]
func (t *TodoListApi) GetTodoList(c *gin.Context) {
	var userList []model.TodoListModel
	err := database.DB.Limit(1).Offset(10).Find(&userList).Error
	if err != nil {
		c.JSON(500, gin.H{"message": "查询失败", "code": http.StatusInternalServerError})
		return
	}
	c.JSON(200, gin.H{
		"message": "查询成功！",
		"code":    http.StatusOK,
		"data":    userList,
	})
}

// GetTodoInfo 获取 TodoList 详情
func (t *TodoListApi) GetTodoInfo(c *gin.Context) {
	id := c.Param("id")
	var todo model.TodoListModel
	err := database.DB.First(&todo, id).Error
	if err != nil {
		c.JSON(404, gin.H{"message": "未找到该TodoList", "code": http.StatusNotFound})
		return
	}
	c.JSON(200, gin.H{
		"message": "查询成功！",
		"code":    http.StatusOK,
		"data":    todo,
	})
}

// Delete 删除 TodoList
func (t *TodoListApi) Delete(c *gin.Context) {
	// 从请求参数中获取要删除的TodoList的ID
	id := c.Param("id")
	// 检查ID是否为空
	if id == "" {
		c.JSON(400, gin.H{"message": "缺少必要的ID参数", "code": http.StatusBadRequest})
		return
	}
	// 根据ID删除TodoList
	var todo model.TodoListModel
	result := database.DB.Delete(&todo, id)
	if result.Error != nil {
		c.JSON(500, gin.H{"message": "删除失败", "code": http.StatusInternalServerError})
		return
	}
	// 检查是否有记录被删除
	if result.RowsAffected == 0 {
		c.JSON(404, gin.H{"message": "未找到该TodoList", "code": http.StatusNotFound})
		return
	}
	// 删除成功
	c.JSON(200, gin.H{
		"message": "删除成功",
		"code":    http.StatusOK,
	})
}

// Update 更新 TodoList
func (t *TodoListApi) Update(c *gin.Context) {
	// 从请求参数中获取要更新的TodoList的ID
	id := c.Param("id")
	// 检查ID是否为空
	if id == "" {
		c.JSON(400, gin.H{"message": "缺少必要的ID参数", "code": http.StatusBadRequest})
		return
	}
	// 绑定请求体到TodoListModel
	var todo model.TodoListModel
	if err := c.ShouldBindJSON(&todo); err != nil {
		c.JSON(400, gin.H{"message": "请求体格式错误", "code": http.StatusBadRequest})
		return
	}
	// 根据ID查找TodoList
	var existingTodo model.TodoListModel
	result := database.DB.First(&existingTodo, id)
	if result.Error != nil {
		c.JSON(404, gin.H{"message": "未找到该TodoList", "code": http.StatusNotFound})
		return
	}
	// 更新TodoList
	if err := database.DB.Model(&existingTodo).Updates(todo).Error; err != nil {
		c.JSON(500, gin.H{"message": "更新失败", "code": http.StatusInternalServerError})
		return
	}
	// 更新成功
	c.JSON(200, gin.H{
		"message": "更新成功",
		"code":    http.StatusOK,
		"data":    existingTodo,
	})
}

// Add 新增 TodoList
func (t *TodoListApi) Add(c *gin.Context) {
	// 从请求体中绑定数据到 TodoListModel
	var todo model.TodoListModel
	if err := c.ShouldBindJSON(&todo); err != nil {
		c.JSON(400, gin.H{"message": "请求体格式错误", "code": http.StatusBadRequest})
		return
	}

	// 尝试创建 TodoList
	if err := database.DB.Create(&todo).Error; err != nil {
		c.JSON(500, gin.H{"message": "创建失败", "code": http.StatusInternalServerError})
		return
	}

	// 创建成功，返回成功的数据
	c.JSON(200, gin.H{
		"message": "创建成功",
		"code":    http.StatusOK,
		"data":    todo,
	})
}
