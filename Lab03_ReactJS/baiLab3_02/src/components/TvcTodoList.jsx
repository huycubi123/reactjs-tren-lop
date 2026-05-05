import React, { useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/TvcTodoReducer";
import TvcAddTodo from "./TvcAddTodo";
import TvcTodoItem from "./TvcTodoItem";

const TvcTodoList = () => {
  // Khởi tạo state từ localStorage nếu có
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("tvc_todos");
    return localData ? JSON.parse(localData) : [];
  });

  // Tự động lưu vào localStorage mỗi khi danh sách thay đổi
  useEffect(() => {
    localStorage.setItem("tvc_todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="card shadow-sm p-4">
      <h3 className="text-center mb-4">Danh Sách Công Việc</h3>
      <TvcAddTodo dispatch={dispatch} />
      <ul className="list-group">
        {todos.map((todo) => (
          <TvcTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
      {todos.length === 0 && <p className="text-center text-muted mt-3">Chưa có công việc nào!</p>}
    </div>
  );
};

export default TvcTodoList;