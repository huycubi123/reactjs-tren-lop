import React, { useState } from "react";

const TvcAddTodo = ({ dispatch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc mới..."
        />
        <button className="btn btn-primary" type="submit">Thêm</button>
      </div>
    </form>
  );
};

export default TvcAddTodo;