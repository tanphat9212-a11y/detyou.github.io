import "./Brand.css";

import brands from "../../assets/data/brands";
import BrandCard from "./BrandCard";

export default function BrandSection() {
  return (
    <section className="brand-section">

      <div className="container">

        <div className="brand-title">

          Thương hiệu nổi bật

        </div>

        <div className="brand-grid">

          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
