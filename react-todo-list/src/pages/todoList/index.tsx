import { columns } from './columns';
import { useState, useEffect } from 'react';
import { Space, Button, Table, Input, Switch ,Modal, Form } from 'antd';
import { getTodoLists, addTodo, updateTodo, deleteTodo } from '@/api/todolist';
import {Todo} from "./type"
import dayjs from 'dayjs';


type FieldType = {
  name?: string;
  status?: number;
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [model,setModel] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm(); // 获取 Form 实例

  const showModal = (row) => {
    setModel({
      name: row.name,
      status: row.status,
    })
    form.setFieldsValue({
      name: row.name,
      status: row.status,
    })
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setModel({})
    form.resetFields(); // 重置表单
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
        const newTodo = { name: inputValue };
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
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '完成状态',
      dataIndex: 'status',
      key: 'status',
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
        return row.status === val;
      },
      render: (val,row) => {
        return (
          <Switch
            checkedChildren='开启'
            unCheckedChildren='关闭'
            defaultChecked={val === 1 ? true : false}
            onChange={(checked) => {
              const status = checked ? 1 : 0;
              toggleTodo({ ...row, status });
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
      render: (val) => {
        return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      sorter: true,
      render: (val) => {
        return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: (val,row) => {
        return (
          <Space>
            <Button type='link' onClick={
              ()=>showModal(row)
            }>编辑</Button>
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

      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {JSON.stringify(model)}
          <Form.Item<FieldType>
            label="内容"
            name="name"
            rules={[{ required: true, message: '请输入待办事项' }]}
          >
            <Input value={model.name} onChange={ (e)=> setModel((model)=>({...model, name: e.target.value}))} />
          </Form.Item>

          <Form.Item<FieldType>
            label="状态"
            name="status"
            rules={[{ required: true, message: '状态' }]}
          >
             <Switch
                checkedChildren='开启'
                unCheckedChildren='关闭'
                defaultChecked={model.status === 1 ? true : false}
                onChange={(checked) => {
                  const status = checked ? 1 : 0;
                  setModel((model)=>({...model, status}))
                }}
              />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default TodoList;
