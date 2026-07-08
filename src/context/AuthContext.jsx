import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Tự động kiểm tra xem có tài khoản nào đã đăng nhập từ trước không
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Hàm Đăng ký tài khoản mới
  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Kiểm tra tài khoản đã tồn tại chưa
    if (users.find(u => u.username === username)) {
      alert("Tài khoản này đã tồn tại trên hệ thống!");
      return false;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký tài khoản thành công! Bây giờ bạn có thể đăng nhập.");
    return true;
  };

  // Hàm Đăng nhập
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const account = users.find(u => u.username === username && u.password === password);

    if (account) {
      setUser(account);
      localStorage.setItem("currentUser", JSON.stringify(account));
      alert(`Chào mừng ${username} quay trở lại!`);
      return true;
    } else {
      alert("Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại!");
      return false;
    }
  };

  // Hàm Đăng xuất
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    alert("Đã đăng xuất tài khoản!");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
    
