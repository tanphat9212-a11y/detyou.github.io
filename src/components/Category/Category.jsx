import "./Category.css";

const categories = [
  { name: "Điện thoại", icon: "📱" },
  { name: "Laptop", icon: "💻" },
  { name: "Tablet", icon: "📲" },
  { name: "Đồng hồ", icon: "⌚" },
  { name: "Tai nghe", icon: "🎧" },
  { name: "Sạc dự phòng", icon: "🔋" },
  { name: "Camera", icon: "📷" },
  { name: "Tivi", icon: "📺" },
  { name: "Gia dụng", icon: "🏠" },
  { name: "Phụ kiện", icon: "🎮" }
];

export default function Category() {
  return (
    <section className="category">
      <div className="container">

        <h2>Danh mục nổi bật</h2>

        <div className="category-grid">
          {categories.map((item, index) => (
            <div className="category-item" key={index}>
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}