import React from "react";
import { useParams } from "react-router-dom";

// Giả lập mảng nội dung chữ của bài báo (Bạn có thể đưa mảng này vào file newsData.js riêng)
const newsData = [
  { id: 1, title: "Top điện thoại mới ra mắt đáng mua nhất hiện nay", date: "05/07/2026", content: "Thị trường điện thoại thông minh nửa đầu năm 2026 chứng kiến sự bùng nổ của các dòng sản phẩm tích hợp trí tuệ nhân tạo (AI) sâu vào hệ điều hành. Nổi bật nhất là các dòng sản phẩm phân khúc cận cao cấp với màn hình tần số quét cao, thời lượng pin trâu và camera chống rung quang học thế hệ mới giúp người dùng thỏa sức trải nghiệm cả ngày dài..." },
  { id: 2, title: "So sánh iPhone và Samsung: Nên chọn máy nào?", date: "03/07/2026", content: "Việc lựa chọn giữa iPhone và Samsung luôn là chủ đề đau đầu của các tín đồ công nghệ. Trong khi iPhone mang lại sự tối ưu mượt mà về hệ điều hành iOS, giữ giá tốt và hệ sinh thái khép kín an toàn; thì các dòng flagship của Samsung lại chiếm ưu thế tuyệt đối về khả năng đa nhiệm, màn hình gập độc đáo và camera thu phóng đỉnh cao..." },
  { id: 3, title: "Laptop học tập, làm việc tốt nhất năm nay", date: "01/07/2026", content: "Đối với học sinh, sinh viên và nhân viên văn phòng, một chiếc laptop lý tưởng cần dung hòa được 3 yếu tố: Cấu hình ổn định, thời lượng pin trên 8 tiếng và trọng lượng nhẹ dễ di chuyển. Xu hướng năm nay gọi tên các dòng chip tiết kiệm điện thế hệ mới, đi kèm dung lượng RAM tối thiểu 16GB để đảm bảo mượt mà..." },
  { id: 4, title: "Mẹo sử dụng điện thoại giúp tăng tuổi thọ pin", date: "28/06/2026", content: "Để pin điện thoại không bị chai nhanh, các chuyên gia công nghệ khuyến cáo người dùng nên duy trì dung lượng pin trong khoảng từ 20% đến 80%. Việc cắm sạc qua đêm liên tục hoặc vừa sạc vừa chơi game đồ họa nặng là nguyên nhân chính dẫn đến tình trạng quá nhiệt, gây phồng pin và giảm tuổi thọ linh kiện một cách nhanh chóng..." }
];

export default function NewsDetail() {
  const { id } = useParams(); // Bắt lấy ID bài báo từ URL

  // Tìm bài viết khớp với ID
  const article = newsData.find((item) => String(item.id) === String(id));

  if (!article) {
    return <div className="container" style={{ padding: "50px", textAlign: "center" }}>Bài viết không tồn tại.</div>;
  }

  return (
    <div className="news-detail-page container" style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px", lineHeight: "1.4" }}>{article.title}</h1>
      <p style={{ color: "gray", fontSize: "14px", marginBottom: "20px" }}>Ngày đăng: {article.date} | Chuyên mục: Tin công nghệ</p>
      <hr style={{ border: "0", borderTop: "1px solid #eee", marginBottom: "20px" }} />
      
      {/* Hiển thị phần nội dung chữ của bài báo */}
      <div className="news-content" style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", textAlignment: "justify" }}>
        <p>{article.content}</p>
        <p style={{ marginTop: "20px", fontWeight: "bold", fontStyle: "italic" }}>Theo Shop Công Nghệ tổng hợp.</p>
      </div>
    </div>
  );
}
