import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="top-banner">
        <img
          src="https://cdnv2.tgdd.vn/mwg-static/common/Banner/84/45/8445a4e4d9d2b2b5f4e8cf96cf8e5d4d.png"
          alt=""
        />
      </div>

      <header className="header">
        <div className="container header-container">

          <div className="logo">
            ShopVN
          </div>

          <div className="search">

            <input
              type="text"
              placeholder="Bạn tìm gì..."
            />

            <button>
              🔍
            </button>

          </div>

          <nav className="menu">

            <a href="#">Trang chủ</a>

            <a href="#">Điện thoại</a>

            <a href="#">Laptop</a>

            <a href="#">Tablet</a>

            <a href="#">Phụ kiện</a>

          </nav>

          <div className="header-right">

            <button className="login">
              Đăng nhập
            </button>

            <button className="cart">
              🛒 Giỏ hàng
            </button>

          </div>

        </div>
      </header>
    </>
  );
}