import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import { useCart } from "../../context/CartContext"; 
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { cartItems, user, logout } = useCart(); 
  const [searchTerm, setSearchTerm] = useState("");

  const totalQuantity = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(""); 
    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* ✨ NÚT TRANG CHỦ / LOGO (MỚI THÊM VÀO BÊN TRÁI) */}
        <Link to="/" className="header-logo" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", fontSize: "18px", marginRight: "15px" }}>
          🏠 <span className="logo-text">TGDD Clone</span>
        </Link>

        {/* Thanh tìm kiếm */}
        <form onSubmit={handleSearch} className="search-bar" style={{ margin: "0" }}> 
          <input
            type="text"
            placeholder="Bạn tìm gì..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>

        {/* Cụm nút bên phải: Giỏ hàng & Đăng nhập */}
        <div className="header-right-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Nút Giỏ Hàng */}
          <Link to="/checkout" className="header-cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Giỏ hàng</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>

          {/* Khối hiển thị Đăng nhập / Thành viên */}
          {user ? (
            <div className="user-logged-info" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "4px" }}>
              <span style={{ fontWeight: "bold" }}>👤 {user.username}</span>
              <button onClick={logout} style={{ background: "none", border: "none", color: "#e10c00", cursor: "pointer", textDecoration: "underline", fontWeight: "bold" }}>
                Thoát
              </button>
            </div>
          ) : (
            <Link to="/login" className="header-login-btn" style={{ textDecoration: "none", color: "#333", fontWeight: "bold", padding: "8px 12px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "4px" }}>
              🔑 Đăng nhập
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
