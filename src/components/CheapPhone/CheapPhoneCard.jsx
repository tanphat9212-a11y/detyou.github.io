import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link ở đầu file

export default function CheapPhoneCard({ item }) {
  return (
    /* ✨ 2. Bọc thẻ Link ngoài cùng để click vào đâu trên ô Điện thoại giá rẻ cũng nhảy trang chi tiết */
    <Link 
      to={`/product/${item.id}`} 
      style={{ textDecoration: "none", color: "inherit", display: "block" }} 
      className="cheap-phone-card-link"
    >
      <div className="cheap-phone-card">
        
        {/* Nhãn phần trăm giảm giá màu đỏ (-10%, -12%) */}
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

      </div>
    </Link>
  );
}

