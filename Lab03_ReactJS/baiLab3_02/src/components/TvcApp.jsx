import React from "react";
import { TvcThemeProvider } from "./context/TvcThemeContext";
import TvcTodoList from "./components/TvcTodoList";
import TvcThemeToggle from "./components/TvcThemeToggle";

const TvcApp = () => {
  return (
    <TvcThemeProvider>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Mini Project: To-Do List</h1>
          <p className="text-muted">Thực hành React Hooks: useState, useEffect, useReducer, useContext</p>
          <TvcThemeToggle />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <TvcTodoList />
          </div>
        </div>
      </div>
    </TvcThemeProvider>
  );
};

export default TvcApp;