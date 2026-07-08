import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // 1. Import useCart

export default function ProductItem({ item }) {
  const { addToCart } = useCart(); // 2. Lấy hàm thêm vào giỏ

  return (
    <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-item">
        <div className="product-image"><img src={item.image} alt={item.name} /></div>
        <h3>{item.name}</h3>
        <div className="product-price">{item.price ? item.price.toLocaleString() : 0}₫</div>
        <div className="product-rating">★★★★★</div>
        
        {/* 3. Cập nhật nút bấm với e.preventDefault() */}
        <button 
          type="button" 
          className="add-to-cart-btn"
          onClick={(e) => {
            e.preventDefault(); // Chặn không cho thẻ Link chuyển hướng trang
            addToCart(item);    // Thực hiện thêm vào giỏ hàng
          }}
        >
          Thêm vào giỏ
        </button>
      </div>
    </Link>
  );
}

