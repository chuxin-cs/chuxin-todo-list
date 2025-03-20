package model

type TodoListModel struct {
	*Model
	Name string `json:"name"`
}

func (TodoListModel) TableName() string {
	return "sys_models"
}
