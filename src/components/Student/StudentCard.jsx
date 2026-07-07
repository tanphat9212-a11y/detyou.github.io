export default function StudentCard({ item }) {
  return (
    <div className="student-card">

      <div className="student-image">

        <img
          src={item.image}
          alt={item.name}
        />

      </div>

      <h3>{item.name}</h3>

      <div className="student-price">
        {item.price.toLocaleString()}₫
      </div>

      <div className="student-old">
        {item.oldPrice.toLocaleString()}₫
      </div>

      <button>Mua ngay</button>

    </div>
  );
}