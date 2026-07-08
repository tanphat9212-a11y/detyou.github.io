import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link ở đầu file
import "./Deal.css";

// Mảng dữ liệu mã giảm giá (Nếu dự án của bạn gọi mảng từ file riêng, hãy giữ nguyên dòng import mảng đó)
const couponsData = [
  { id: 1, title: "Giảm 500.000đ", desc: "Cho đơn hàng từ 10 triệu", path: "/checkout" }, 
  { id: 2, title: "Quà tặng hấp dẫn", desc: "Áp dụng sản phẩm chọn lọc", path: "/dien-thoai" },
  { id: 3, title: "Ưu đãi thanh toán", desc: "Giảm thêm khi dùng thẻ", path: "/checkout" },
  { id: 4, title: "Flash Deal", desc: "Số lượng có hạn mỗi ngày", path: "/search?query=sale" }
];

export default function CouponSection() {
  return (
    <section className="coupon-section">
      <div className="container">
        <h2>Ưu đãi dành cho bạn</h2>
        
        <div className="coupon-grid">
          {couponsData.map((item) => (
            
            /* ✨ 2. Bọc thẻ Link ngoài cùng từng ô mã giảm giá */
            <Link 
              to={item.path} 
              key={item.id} 
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
              className="coupon-item-link"
            >
              <div className="coupon-item">
                <div className="coupon-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                
                {/* Đổi từ thẻ button cũ thành thẻ div để tránh lỗi lồng thẻ nút bấm tương tác */}
                <div className="coupon-btn">
                  Dùng ngay
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}
