import React, { createContext, useContext, useState } from 'react';

// 1. Khởi tạo Context
export const ThemeContext = createContext();

// 2. Component sử dụng Context (Themed Component)
export function TvcThemedComponent() {
  // Lấy dữ liệu từ Context thông qua useContext Hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div 
      className="p-4 rounded shadow-sm transition-all"
      style={{ 
        backgroundColor: theme === "light" ? "#fff" : "#333", 
        color: theme === "light" ? "#000" : "#fff",
        border: "1px solid #ddd"
      }}
    >
      <h3 className="fw-bold">Chế độ hiện tại: {theme}</h3>
      <button 
        className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} mt-2`} 
        onClick={toggleTheme}
      >
        Chuyển đổi theme
      </button>
    </div>
  );
}

// 3. Component bao bọc cung cấp dữ liệu (Provider)
export default function TvcThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Thêm class theme vào div bao ngoài để dễ dàng quản lý CSS nếu cần */}
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}