import axios from "axios";

const BaseURL= `http://localhost:8000/todolist`
// 删除
export function del(data) {
  return axios.delete(BaseURL + "/del", { data: data })
}

// 新增
export function add(){
  return axios.post(BaseURL+"/add")
}

// 修改
export function update(){
  return axios.put(BaseURL +"/update")
}

// 查询全部
export function query(){
  return axios.get(BaseURL + "/query")
}

// 查询分页
export function queryPage(){
  return axios.get(BaseURL + "/queryPage")
}