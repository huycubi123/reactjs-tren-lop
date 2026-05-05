import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const TvcThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Bao bọc toàn bộ nội dung trong một thẻ div để áp dụng CSS theme */}
      <div className={theme} style={{ minHeight: '100vh', transition: 'all 0.3s' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);