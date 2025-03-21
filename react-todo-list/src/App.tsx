import { useState, useEffect } from 'react';
// 从 api/user 中导入 getTodoLists 方法
import { getTodoLists, addTodo, updateTodo, deleteTodo } from './api/todolist';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // 从 API 获取 todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodoLists();
        setTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };
    fetchTodos();
  }, []);

  // 添加新的 todo
  const handleAddTodo = async () => {
    // 检查输入框是否为空
    if (inputValue.trim()) {
      try {
        const newTodo = { text: inputValue, completed: false };
        const response = await addTodo(newTodo);
        setTodos([...todos, response.data]);
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
  const deleteTodo = async (id: number) => {
    try {
      await deleteTodo(`${API_URL}/${id}`);
      const newTodos = todos.filter((t) => t.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder='输入待办事项'
          />
          <button onClick={handleAddTodo}>添加</button>
        </div>

        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
          >
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                marginLeft: 8,
                marginRight: 8,
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
