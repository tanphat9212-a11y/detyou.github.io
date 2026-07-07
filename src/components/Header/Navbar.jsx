import { FaMapMarkerAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="container navbar-wrap">

        <div className="logo">

          <img
            src="/images/logo/logo.png"
            alt=""
          />

        </div>

        <div className="location">

          <FaMapMarkerAlt />

          <span>Hồ Chí Minh</span>

        </div>

        <div className="cart">

          <FaShoppingCart />

          <span>Giỏ hàng</span>

        </div>

      </div>

    </div>
  );
}