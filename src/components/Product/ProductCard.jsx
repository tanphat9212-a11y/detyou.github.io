import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <span className="discount-badge">
        {product.discount}
      </span>

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="installment">

        {product.installment}

      </div>

      <h3 className="product-title">

        {product.name}

      </h3>

      <div className="product-price">

        {product.price.toLocaleString()}₫

      </div>

      <div className="product-old-price">

        {product.oldPrice.toLocaleString()}₫

      </div>

      <button className="buy-button">

        Mua ngay

      </button>

    </div>
  );
}