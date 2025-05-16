package model

type TodoListModel struct {
	*Model
	Name   string `json:"name"`
	Status int    `json:"status"`
}

func (TodoListModel) TableName() string {
	return "todo"
}
