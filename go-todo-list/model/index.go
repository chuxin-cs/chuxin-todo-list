package model

import "time"

// Model 定义的全局 model
type Model struct {
	ID        uint      `gorm:"primary_key" json:"id"` // 主键id
	CreatedAt time.Time `json:"created_at"`            // 创建时间
	UpdatedAt time.Time `json:"updated_at"`            // 更新时间
}
