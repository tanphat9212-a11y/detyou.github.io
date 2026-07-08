import React from "react";
import { Link } from "react-router-dom"; // Import Link để kích hoạt chuyển hướng
import "./Coupon.css";

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
        
        <div className="coupon-grid" style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {couponsData.map((item) => (
            
            /* ✨ Bọc thẻ Link ngoài cùng với thuộc tính khối display: block để phủ rộng vùng bấm */
            <Link 
              to={item.path} 
              key={item.id} 
              style={{ textDecoration: "none", color: "inherit", display: "block", flex: 1, minWidth: "200px" }}
              className="coupon-item-link"
            >
              <div className="coupon-item">
                <div className="coupon-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                
                {/* ✨ ĐÃ SỬA: Thay thế hoàn toàn thẻ <button> cũ bằng thẻ <span> */}
                {/* Việc này giúp loại bỏ lỗi lồng thẻ nút bấm (button inside anchor) của HTML khiến link bị liệt */}
                <span className="coupon-btn-mock" style={{ display: 'inline-block', padding: '5px 15px', backgroundColor: '#e10c00', color: 'white', borderRadius: '4px', textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                  Dùng ngay
                </span>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}

