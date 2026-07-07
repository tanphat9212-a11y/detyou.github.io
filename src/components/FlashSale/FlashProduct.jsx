export default function FlashProduct({ item }) {
  return (
    <div className="flash-card">

      <div className="flash-image">

        <img src={item.image} alt="" />

      </div>

      <div className="flash-name">

        {item.name}

      </div>

      <div className="flash-price">

        {item.price.toLocaleString()}₫

      </div>

      <div className="flash-old">

        {item.oldPrice.toLocaleString()}₫

        <span>{item.discount}</span>

      </div>

      <button className="flash-btn">

        Mua ngay

      </button>

    </div>
  );
}