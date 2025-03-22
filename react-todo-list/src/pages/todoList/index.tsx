import { columns } from './columns';
import { Space, Button, Table } from 'antd';
import { useState, useEffect } from 'react';
import { getTodoLists, addTodo, updateTodo, deleteTodo } from '@/api/todolist';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  
  const fetchTodos = async () => {
    try {
      const res = await getTodoLists();
      setTodos(res);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  // 从 API 获取 todos
  useEffect(() => {
    fetchTodos();
  }, []);

  // 添加新的 todo
  const handleAddTodo = async () => {
    // 检查输入框是否为空
    if (inputValue.trim()) {
      try {
        const newTodo = { text: inputValue, completed: false };
        await addTodo(newTodo);
        fetchTodos();
        // 清空输入框
        setInputValue('');
      } catch (error) {
        console.error('Failed to add todo:', error);
      }
    }
  };

  // 切换 todo 完成状态
  const toggleTodo = async (id: number) => {
    const todoToUpdate = todos.find((t) => t.id === id);
    if (todoToUpdate) {
      try {
        const updatedTodo = {
          ...todoToUpdate,
          completed: !todoToUpdate.completed,
        };
        await updateTodo(`${API_URL}/${id}`, updatedTodo);
        setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
      } catch (error) {
        console.error('Failed to toggle todo:', error);
      }
    }
  };
  // 删除 todo
  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      const newTodos = todos.filter((t) => t.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const columns = [
    {
      title: '内容',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: (row) => {
        return (
          <Space>
            <Button type='link'>编辑</Button>
            <Button
              type='link'
              danger
              onClick={() => {
                handleDeleteTodo(row.id);
              }}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        placeholder='输入待办事项'
      />
      <button onClick={handleAddTodo}>添加</button>
      <Table dataSource={todos} columns={columns} />
    </>
  );
}

export default TodoList;
