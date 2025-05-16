import { get, post, put, del } from '../utils/request';


// 删除
export function delTodo(data) {
  return del("/todolist/del",{ data })
}

// 新增
export function add(data){
  return post("/todolist/add", data)
}

// 修改
export function update(data){
  return put("/todolist/update", data)
}

// 查询全部
export function query(){
  return get("/todolist/query")
}

// 查询分页
export function queryPage(){
  return get("/todolist/queryPage")
}