export default function CheapPhoneCard({ item }) {
  return (
    <div className="cheap-card">

      <span className="cheap-discount">

        {item.discount}

      </span>

      <div className="cheap-image">

        <img
          src={item.image}
          alt={item.name}
        />

      </div>

      <h3>

        {item.name}

      </h3>

      <div className="cheap-price">

        {item.price.toLocaleString()}₫

      </div>

      <div className="cheap-old">

        {item.oldPrice.toLocaleString()}₫

      </div>

    </div>
  );
}