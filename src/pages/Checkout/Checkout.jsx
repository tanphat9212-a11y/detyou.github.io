import React from "react";
import { useCart } from "../../context/CartContext"; // Kết nối với CartContext để lấy thông tin đăng nhập
import "./Checkout.css";

export default function Checkout() {
  // Lấy mảng giỏ hàng (cartItems) và tài khoản đang đăng nhập (user) ra sử dụng
  const { cartItems, user } = useCart(); 

  // Tính tổng số tiền của giỏ hàng
  const totalAmount = cartItems ? cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;

  // 1. Kiểm tra nếu chưa đăng nhập thì bắt buộc hiển thị thông báo Đăng nhập trước
  if (!user) {
    return (
      <div className="container" style={{ padding: "50px", textAlign: "center" }}>
        <h2>Vui lòng đăng nhập để xem giỏ hàng và thanh toán</h2>
      </div>
    );
  }

  // 2. Nếu đã đăng nhập thành công, hiển thị giao diện danh sách giỏ hàng
  return (
    <section className="checkout-page">
      <div className="container" style={{ padding: "20px" }}>
        <h1>Giỏ hàng của: <span style={{ color: "#ffbc05" }}>{user.username}</span></h1>
        
        {cartItems && cartItems.length > 0 ? (
          <div className="checkout-content" style={{ marginTop: "20px" }}>
            {/* Vòng lặp hiển thị từng sản phẩm đã mua */}
            <div className="cart-list" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item" style={{ display: "flex", alignItems: "center", justifyBetween: "space-between", padding: "10px", border: "1px solid #eee", borderRadius: "4px" }}>
                  <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                  <div style={{ flex: 1, marginLeft: "15px" }}>
                    <h3 style={{ fontSize: "16px" }}>{item.name}</h3>
                    <p style={{ color: "gray" }}>Số lượng: {item.quantity}</p>
                  </div>
                  <p style={{ fontWeight: "bold", color: "red" }}>{(item.price * item.quantity).toLocaleString()}₫</p>
                </div>
              ))}
            </div>

            {/* Khối hiển thị tổng tiền thanh toán */}
            <div className="cart-summary" style={{ marginTop: "30px", borderTop: "2px solid #ccc", paddingTop: "15px", textAlign: "right" }}>
              <h2>Tổng tiền: <span style={{ color: "red" }}>{totalAmount.toLocaleString()}₫</span></h2>
              <button style={{ marginTop: "15px", padding: "12px 30px", backgroundColor: "#ffbc05", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>
                TIẾN HÀNH ĐẶT HÀNG
              </button>
            </div>
          </div>
        ) : (
          <p style={{ marginTop: "20px", textAlign: "center" }}>Giỏ hàng của bạn đang trống.</p>
        )}
      </div>
    </section>
  );
}

