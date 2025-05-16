import { get, post, put, del } from '../utils/request';

// 获取todo列表
export const getTodoLists = () => {
  return get('/todolist/query');
};

// 添加todo
export const addTodo = (data: any) => {
  return post('/todolist/add', data);
};

// 更新todo
export const updateTodo = (data: any) => {
  return put('/todolist/update', data);
};

// 删除todo
export const deleteTodo = (id: number) => {
  return del(`/todolist/del`,{ data: { id } });
};
