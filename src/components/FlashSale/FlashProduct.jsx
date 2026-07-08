import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link ở đầu file

export default function FlashProduct({ item }) {
  return (
    /* ✨ 2. Bọc thẻ Link ngoài cùng để click vào đâu trên ô Flash Sale cũng chuyển sang trang chi tiết */
    <Link 
      to={`/product/${item.id}`} 
      style={{ textDecoration: "none", color: "inherit", display: "block" }} 
      className="flash-product-link"
    >
      <div className="flash-product-item">
        
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

        {/* Khối hiển thị giá cũ và phần trăm giảm nếu có */}
        {item.oldPrice && (
          <div className="product-price-old">
            <span className="old-price">{item.oldPrice.toLocaleString()}₫</span>
            <span className="discount-percent"> -{item.discount}%</span>
          </div>
        )}

        {/* Nút Mua Ngay đổi thành thẻ div để không bị xung đột lỗi lồng thẻ trong HTML */}
        <div className="flash-buy-btn" style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#ffbc05", borderRadius: "4px", fontWeight: "bold", marginTop: "15px", color: "#000" }}>
          Mua ngay
        </div>

      </div>
    </Link>
  );
}

