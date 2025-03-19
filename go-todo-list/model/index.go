package model

import "time"

// Model 定义的全局 model
type Model struct {
	ID         uint `gorm:"primary_key"`
	CreateTime time.Time
	UpdateTIme time.Time
}
