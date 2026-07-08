import React from "react";
import { Link } from "react-router-dom"; // ✨ Import Link để kích hoạt chuyển hướng

export default function DealCard({ item }) {
  // Tự động gán đường dẫn thông minh: Nếu dữ liệu mẫu chưa có thuộc tính path, 
  // hệ thống sẽ tự động đưa người dùng sang trang danh mục điện thoại hoặc trang chủ để tránh lỗi trang trắng.
  const targetPath = item.path || "/dien-thoai"; 

  return (
    /* ✨ Bọc thẻ Link ngoài cùng để click vào bất kỳ vị trí nào trên ô ưu đãi cũng chuyển trang được */
    <Link to={targetPath} style={{ textDecoration: "none", color: "inherit", display: "block" }} className="deal-card-link">
      
      <div className="deal-card">
        
        {/* Hình ảnh banner ưu đãi */}
        <div className="deal-image">
          <img src={item.image} alt={item.title} />
        </div>

        {/* Nội dung chữ hiển thị phía dưới nếu có */}
        <div className="deal-info">
          <h3>{item.title}</h3>
          
          {/* Nút hành động (Xem ngay, Mua ngay, Khám phá...) */}
          <div className="deal-btn">
            {item.buttonText || "Xem ngay"}
          </div>
        </div>

      </div>

    </Link>
  );
}
