import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link để chuyển trang
import "./Category.css";

const categories = [
  { name: "Điện thoại", icon: "📱", path: "/dien-thoai" },
  { name: "Laptop", icon: "💻", path: "/laptop" },
  { name: "Tablet", icon: "📲", path: "/tablet" },
  { name: "Đồng hồ", icon: "⌚", path: "/dong-ho" },
  { name: "Tai nghe", icon: "🎧", path: "/tai-nghe" },
  { name: "Sạc dự phòng", icon: "🔋", path: "/sac-du-phong" },
  { name: "Camera", icon: "📷", path: "/camera" },
  { name: "Tivi", icon: "📺", path: "/tivi" },
  { name: "Gia dụng", icon: "🏠", path: "/gia-dung" },
  { name: "Phụ kiện", icon: "🎮", path: "/phu-kien" }
];

export default function Category() {
  return (
    <section className="category">
      <div className="container">

        <h2>Danh mục nổi bật</h2>

        <div className="category-grid">
          {categories.map((item, index) => (
            
            /* ✨ 2. Dùng thẻ Link bọc ngoài cùng ô danh mục */
            <Link 
              to={item.path} 
              key={index} 
              style={{ textDecoration: "none", color: "inherit" }}
              className="category-item-link"
            >
              <div className="category-item">
                <div className="icon">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            </Link>
  
          ))}
        </div>

      </div>
    </section>
  );
}
