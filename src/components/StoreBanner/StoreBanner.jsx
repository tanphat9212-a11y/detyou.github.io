import "./StoreBanner.css";

export default function StoreBanner() {
  return (
    <section className="store-section">

      <div className="container">

        <div className="store-banner">

          <img
            src="/images/banners/store-banner.jpg"
            alt=""
          />

          <div className="store-content">

            <h2>
              Tìm cửa hàng gần bạn
            </h2>

            <p>
              Hệ thống cửa hàng toàn quốc
            </p>

            <button>
              Xem danh sách cửa hàng
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}