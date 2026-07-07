import "./ProductGrid.css";

import products from "../../assets/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="product-section">

      <div className="container">

        <div className="section-header">

          <h2>Gợi ý cho bạn</h2>

        </div>

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}