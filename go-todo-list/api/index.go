package api

// ApiGroupApp 当前拿到的是 ApiGroup 的指针类型
var ApiGroupApp = new(ApiGroup)

// ApiGroup
/***
 * ApiGroup 当结构体（ApiGroup）匿名嵌套另一个结构体（TodoListApi）时,嵌套结构体的所有方法会被自动提升到外层结构体, 这意味着 ApiGroup 的实例可以直接调用 TodoListApi 的方法
 * 外部到时候可以通过以下三种方式都可以拿到：
 *		1、api.ApiGroup{}
 *		2、api.TodoListApi{}
 *		3、api.ApiGroupApp.TodoListApi
 */
type ApiGroup struct {
	TodoListApi // 匿名嵌套（嵌入）

	//	如果是具名嵌套 那么 api.ApiGroup{} 这种方式就拿不到了
	//	TodoListApi TodoListApi
}
