import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link ở đầu file

export default function ProductCard({ product }) {
  return (
    /* ✨ 2. Bọc thẻ Link ngoài cùng để click vào đâu trên ô sản phẩm cũng chuyển sang trang chi tiết */
    <Link 
      to={`/product/${product.id}`} 
      style={{ textDecoration: "none", color: "inherit", display: "block" }} 
      className="product-card-link"
    >
      <div className="product-card">
        
        {/* Khung chứa ảnh sản phẩm */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Tên sản phẩm */}
        <h3>{product.name}</h3>

        {/* Khối hiển thị giá mới */}
        <div className="product-price">
          {product.price ? product.price.toLocaleString() : 0}₫
        </div>

        {/* Khối hiển thị giá cũ nếu có */}
        {product.oldPrice && (
          <div className="product-price-old" style={{ textDecoration: "line-through", color: "gray", fontSize: "13px" }}>
            {product.oldPrice.toLocaleString()}₫
          </div>
        )}

        {/* Đánh giá ngôi sao */}
        <div className="product-rating" style={{ color: "#ffbc05", marginTop: "5px" }}>
          ★★★★★
        </div>

      </div>
    </Link>
  );
}
