import React from "react";

const TvcTodoItem = ({ todo, dispatch }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ 
          textDecoration: todo.completed ? "line-through" : "none", 
          cursor: "pointer",
          color: todo.completed ? "gray" : "inherit"
        }}
        onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      >
        {todo.text}
      </span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Xóa
      </button>
    </li>
  );
};

export default TvcTodoItem;