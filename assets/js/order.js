const orders = [
  { id: 1, status: "processing" },
  { id: 2, status: "shipping" },
  { id: 3, status: "delivered" }
];

function getStatus(order) {
  switch(order.status) {
    case "processing": return "⏳ Đang xử lý";
    case "shipping": return "🚚 Đang giao";
    case "delivered": return "📦 Đã giao";
  }
}