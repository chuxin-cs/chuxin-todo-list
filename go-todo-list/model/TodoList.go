package model

type TodoListModel struct {
	*Model
	Name   string `gorm:"type:varchar(255);not null" json:"name"`
	Status int    `json:"status"`
}

func (TodoListModel) TableName() string {
	return "todo"
}
