import { createContext, useContext, useState } from 'react';
// createContext: Cho phép chia sẻ trạng thái giữ các components mà kh cần truyền props qua từng cấp.

// Lưu trạng thái darkMode và hàm toggleDarkMode
const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Lấy key trong Local storage
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', !prevMode);
      return !prevMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
