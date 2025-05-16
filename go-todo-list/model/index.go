package model

import "time"

// Model 定义的全局 model
type Model struct {
	ID          uint      `gorm:"primary_key" json:"id"`                 // 主键id
	Create_Time time.Time `gorm:"column:create_time" json:"create_time"` // 创建时间，将字段名修改为 Create_Time
	Update_Time time.Time `gorm:"column:update_time" json:"update_time"` // 更新时间
}
