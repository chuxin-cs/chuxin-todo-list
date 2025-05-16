package model

import "time"

// Model 定义的全局 model
type Model struct {
	ID         uint      `gorm:"primary_key" json:"id"`                                            // 主键id
	CreateTime time.Time `gorm:"column:create_time;autoCreateTime;precision:0" json:"create_time"` // 创建时间，将字段名修改为 Create_Time
	UpdateTime time.Time `gorm:"column:update_time;autoCreateTime;precision:0" json:"update_time"` // 更新时间
}
