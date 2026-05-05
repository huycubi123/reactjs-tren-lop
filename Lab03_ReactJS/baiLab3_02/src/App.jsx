import React, { useState, useContext, createContext, useReducer, useEffect, useRef } from 'react';
import './App.css';
// --- 1. CONTEXT CHO THEME ---
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// --- 2. REDUCER CHO TODO ---
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

// --- 3. COMPONENTS ---

// Nút chuyển đổi Theme
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="btn-theme" onClick={toggleTheme}>
      Chế độ: {theme === 'light' ? 'Sáng ' : 'Tối '}
    </button>
  );
};

// Form thêm công việc
const AddTodo = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
      inputRef.current.focus(); // Tự động focus lại ô nhập
    }
  };

  return (
    <form onSubmit={handleAdd} className="todo-form">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Thêm công việc mới..."
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

// Danh sách công việc
const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const saved = localStorage.getItem('tvc_todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tvc_todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-content">
      <h2>Danh Sách Công Việc</h2>
      <AddTodo dispatch={dispatch} />
      <ul className="list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- 4. COMPONENT APP TỔNG ---
export default function App() {
  return (
    <ThemeProvider>
      <div className="main-wrapper">
        <header>
          <h1> To-Do List</h1>
          <ThemeToggle />
        </header>
        <TodoList />
      </div>
    </ThemeProvider>
  );
}