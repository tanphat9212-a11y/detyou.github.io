import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="search">

      <div className="container">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Bạn tìm gì..."
          />

        </div>

      </div>

    </div>
  );
}