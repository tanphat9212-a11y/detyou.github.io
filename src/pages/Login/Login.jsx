import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  
  // Trạng thái cấu hình form: true là Đăng nhập, false là Đăng ký
  const [isLoginView, setIsLoginView] = useState(true);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (isLoginView) {
      // Gọi hàm đăng nhập
      const success = login(username, password);
      if (success) navigate("/"); // Đăng nhập xong tự động đưa về trang chủ
    } else {
      // Gọi hàm đăng ký
      const success = register(username, password);
      if (success) setIsLoginView(true); // Đăng ký xong tự động chuyển sang form Đăng nhập
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "30px", border: "1px solid #e0e0e0", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        {isLoginView ? "ĐĂNG NHẬP" : "ĐĂNG KÝ TÀI KHOẢN"}
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Tên tài khoản:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên tài khoản..."
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Mật khẩu:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "12px", background: "#ffbc05", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", fontSize: "16px" }}>
          {isLoginView ? "Đăng nhập ngay" : "Tạo tài khoản mới"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
        {isLoginView ? "Chưa có tài khoản? " : "Đã có tài khoản từ trước? "}
        <span 
          onClick={() => { setIsLoginView(!isLoginView); setUsername(""); setPassword(""); }} 
          style={{ color: "#007bff", cursor: "pointer", fontWeight: "bold", textDecoration: "underline" }}
        >
          {isLoginView ? "Đăng ký tại đây" : "Đăng nhập tại đây"}
        </span>
      </p>
    </div>
  );
}
