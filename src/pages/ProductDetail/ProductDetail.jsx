import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import { useCart } from "../../context/CartContext"; // 1. Import useCart

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // 2. Lấy hàm addToCart ra sử dụng

  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return <div style={{ padding: "50px", textAlign: "center" }}><h3>Sản phẩm không tồn tại!</h3></div>;
  }

  return (
    <div className="product-detail-container" style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "50px" }}>
        <div style={{ flex: "1" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%" }} />
        </div>
        <div style={{ flex: "1" }}>
          <h1>{product.name}</h1>
          <p style={{ color: "red", fontSize: "22px", fontWeight: "bold" }}>
            Giá: {Number(product.price).toLocaleString('vi-VN')}đ
          </p>
          
          {/* 3. Thêm sự kiện onClick vào nút mua hàng */}
          <button 
            onClick={() => addToCart(product)}
            style={{ background: "#fb923c", color: "white", border: "none", padding: "12px 30px", fontSize: "16px", fontWeight: "bold", borderRadius: "4px", cursor: "pointer", width: "100%" }}
          >
            MUA NGAY (THÊM VÀO GIỎ)
          </button>
        </div>
      </div>
    </div>
  );
}
