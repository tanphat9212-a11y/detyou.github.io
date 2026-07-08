import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link ở đầu file

export default function StudentCard({ item }) {
  // Thêm đoạn kiểm tra phòng vệ để tránh bị sập màn hình trắng nếu dữ liệu bị thiếu ID
  if (!item || !item.id) {
    return null;
  }

  return (
    /* ✨ 2. Bọc thẻ Link ngoài cùng để click vào đâu trên ô Laptop cũng nhảy trang chi tiết */
    <Link 
      to={`/product/${item.id}`} 
      style={{ textDecoration: "none", color: "inherit", display: "block" }} 
      className="student-card-link"
    >
      <div className="student-card">
        
        {/* Nhãn phần trăm giảm giá màu đỏ nếu có */}
        {item.discount && (
          <span className="discount-badge">-{item.discount}%</span>
        )}

        {/* Khung chứa ảnh sản phẩm */}
        <div className="product-image">
          <img src={item.image} alt={item.name} />
        </div>

        {/* Tên sản phẩm */}
        <h3>{item.name}</h3>

        {/* Khối hiển thị giá mới */}
        <div className="product-price">
          {item.price ? item.price.toLocaleString() : 0}₫
        </div>

        {/* Khối hiển thị giá cũ */}
        {item.oldPrice && (
          <div className="product-price-old" style={{ textDecoration: "line-through", color: "gray", fontSize: "13px" }}>
            {item.oldPrice.toLocaleString()}₫
          </div>
        )}

        {/* Nút Mua Ngay đổi thành thẻ div để loại bỏ lỗi lồng thẻ nút bấm (button inside anchor) của HTML */}
        <div className="laptop-buy-btn" style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#ffbc05", borderRadius: "4px", fontWeight: "bold", marginTop: "15px", color: "#000" }}>
          Mua ngay
        </div>

      </div>
    </Link>
  );
}

