const menus = [
  "Điện thoại",
  "Laptop",
  "Tablet",
  "Phụ kiện",
  "Smartwatch",
  "Đồng hồ",
  "PC",
  "Máy in",
  "Gia dụng",
  "Tivi",
  "Sim",
  "Khuyến mãi"
];

export default function CategoryMenu() {
  return (
    <div className="category">

      <div className="container">

        <ul className="menu">

          {menus.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}
