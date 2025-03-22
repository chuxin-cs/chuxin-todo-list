import { columns } from './columns';
import { useState, useEffect } from 'react';
import { Space, Button, Table, Input, Switch } from 'antd';
import { getTodoLists, addTodo, updateTodo, deleteTodo } from '@/api/todolist';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  updateTime?: string;
  createTime?: string;
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
  const toggleTodo = async (row: Todo) => {
    console.log(row, '==');
    await updateTodo(row);
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
      title: '完成状态',
      dataIndex: 'completed',
      key: 'completed',
      filters:[
        {
          text: '开启',
          value: 1,
        },
        {
          text: '关闭',
          value: 0,
        },
      ],
      filterSearch: true,
      onFilter:(val,row)=>{
        return row.completed === val;
      },
      render: (val,row) => {
        return (
          <Switch
            checkedChildren='开启'
            unCheckedChildren='关闭'
            defaultChecked={val === 1 ? true : false}
            onChange={(checked) => {
              console.log(row, '===');
              const completed = checked ? 1 : 0;
              toggleTodo({ ...row, completed });
            }}
          />
        );
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      sorter: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      sorter: true,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: (val,row) => {
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

  // 表格变化 可以调用接口进行筛选
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    console.log(filters);
    console.log(sorter)
  };

  return (
    <>
      <Input
        value={inputValue}
        style={{ width: '300px', marginRight: '10px' }}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='输入待办事项'
      />
      <Button type='primary' onClick={handleAddTodo}>
        添加
      </Button>
      <Table rowKey='id' dataSource={todos} columns={columns} onChange={handleTableChange} />
    </>
  );
}

export default TodoList;
