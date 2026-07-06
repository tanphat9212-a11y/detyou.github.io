/// PATH: data/reviews.js

const reviews = [
  {
    id: 1,
    productId: 101,
    userId: 1,
    userName: "Nguyễn Văn A",
    avatar: "assets/images/avatar/default.png",
    rating: 5,
    comment: "Sản phẩm rất đẹp, đúng mô tả, giao hàng nhanh.",
    images: [
      "assets/images/products/fashion/ao1.jpg"
    ],
    likes: 12,
    createdAt: "2026-07-02T10:15:00"
  },
  {
    id: 2,
    productId: 101,
    userId: 2,
    userName: "Trần Thị B",
    avatar: "assets/images/avatar/default.png",
    rating: 4,
    comment: "Áo ổn, chất vải tốt nhưng hơi rộng.",
    images: [],
    likes: 5,
    createdAt: "2026-07-03T14:20:00"
  },
  {
    id: 3,
    productId: 205,
    userId: 3,
    userName: "Lê Văn C",
    avatar: "assets/images/avatar/default.png",
    rating: 5,
    comment: "Tai nghe pin trâu, âm thanh ổn trong tầm giá.",
    images: [
      "assets/images/products/electronics/tainghe1.jpg"
    ],
    likes: 20,
    createdAt: "2026-07-04T09:00:00"
  },
  {
    id: 4,
    productId: 310,
    userId: 4,
    userName: "Phạm Thị D",
    avatar: "assets/images/avatar/default.png",
    rating: 5,
    comment: "Giày đẹp, đi rất êm chân, sẽ mua lại.",
    images: [],
    likes: 8,
    createdAt: "2026-07-05T18:45:00"
  },
  {
    id: 5,
    productId: 502,
    userId: 5,
    userName: "Hoàng Văn E",
    avatar: "assets/images/avatar/default.png",
    rating: 4,
    comment: "Serum dùng ổn, da cải thiện sau 1 tuần.",
    images: [],
    likes: 6,
    createdAt: "2026-07-06T11:30:00"
  }
];

export default reviews;