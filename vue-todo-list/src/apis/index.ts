import axios from "axios";

// 删除
export function del(){
  return axios.delete("http://localhost:8000/del")
}

// 新增
export function add(){
  return axios.post("http://localhost:8000/add")
}

// 修改
export function update(){
  return axios.put("http://localhost:8000/update")
}

// 查询全部
export function query(){
  return axios.get("http://localhost:8000/query")
}

// 查询分页
export function queryPage(){
  return axios.get("http://localhost:8000/queryPage")
}