import React from "react";
import { Link } from "react-router-dom"; // ✨ 1. Import Link để kích hoạt chuyển hướng

export default function NewsCard({ item }) {
  // Đoạn kiểm tra an toàn: Nếu bài viết không có dữ liệu hoặc thiếu ID thì bỏ qua để tránh sập trang chủ
  if (!item || !item.id) {
    return null;
  }

  return (
    /* ✨ 2. Bọc thẻ Link ngoài cùng để biến cả ô tin tức thành vùng bấm chuyển trang */
    <Link 
      to={`/news/${item.id}`} 
      style={{ textDecoration: "none", color: "inherit", display: "block" }} 
      className="news-card-link"
    >
      <article className="news-card">

        <div className="news-image">
          <img
            src={item.image}
            alt={item.title}
          />
        </div>

        <div className="news-info">
          <h3>
            {item.title}
          </h3>

          <span>
            {item.date}
          </span>
        </div>

      </article>
    </Link>
  );
}
