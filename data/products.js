// data/products.js

const products = [
  {
    id: 1,
    name: "Áo thun nam basic cotton cao cấp form rộng",
    price: 120000,
    oldPrice: 199000,
    discount: 40,
    rating: 4.8,
    sold: 1520,
    category: "fashion",
    brand: "BasicWear",
    images: [
      "https://via.placeholder.com/600x600?text=Ao+1",
      "https://via.placeholder.com/600x600?text=Ao+1-2",
      "https://via.placeholder.com/600x600?text=Ao+1-3"
    ],
    stock: 120,
    variants: {
      size: ["S", "M", "L", "XL"],
      color: ["Đen", "Trắng", "Xám"]
    },
    description:
      "Áo thun nam chất cotton 100% mềm mịn, thoáng mát, thấm hút mồ hôi tốt. Form rộng trẻ trung, dễ phối đồ."
  },
  {
    id: 2,
    name: "Giày thể thao nam chạy bộ êm chân",
    price: 350000,
    oldPrice: 520000,
    discount: 33,
    rating: 4.6,
    sold: 980,
    category: "shoes",
    brand: "RunFast",
    images: [
      "https://via.placeholder.com/600x600?text=Shoes+1",
      "https://via.placeholder.com/600x600?text=Shoes+1-2",
      "https://via.placeholder.com/600x600?text=Shoes+1-3"
    ],
    stock: 55,
    variants: {
      size: ["39", "40", "41", "42", "43"],
      color: ["Đen", "Trắng"]
    },
    description:
      "Giày thể thao thiết kế nhẹ, đế êm, phù hợp chạy bộ, đi học, đi chơi."
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth không dây chống ồn",
    price: 250000,
    oldPrice: 400000,
    discount: 38,
    rating: 4.7,
    sold: 2100,
    category: "electronics",
    brand: "SoundPro",
    images: [
      "https://via.placeholder.com/600x600?text=Headphone+1",
      "https://via.placeholder.com/600x600?text=Headphone+1-2",
      "https://via.placeholder.com/600x600?text=Headphone+1-3"
    ],
    stock: 300,
    variants: {
      color: ["Đen", "Trắng", "Xanh"]
    },
    description:
      "Tai nghe bluetooth âm thanh sống động, chống ồn chủ động, pin lâu."
  },
  {
    id: 4,
    name: "Balo laptop chống nước thời trang",
    price: 180000,
    oldPrice: 300000,
    discount: 40,
    rating: 4.5,
    sold: 760,
    category: "accessories",
    brand: "UrbanPack",
    images: [
      "https://via.placeholder.com/600x600?text=Bag+1",
      "https://via.placeholder.com/600x600?text=Bag+1-2",
      "https://via.placeholder.com/600x600?text=Bag+1-3"
    ],
    stock: 80,
    variants: {
      color: ["Đen", "Xám", "Xanh đậm"]
    },
    description:
      "Balo chống nước, nhiều ngăn tiện lợi, phù hợp đi học và đi làm."
  },
  {
    id: 5,
    name: "Đồng hồ nam dây da cao cấp",
    price: 450000,
    oldPrice: 700000,
    discount: 36,
    rating: 4.9,
    sold: 540,
    category: "watch",
    brand: "TimeLux",
    images: [
      "https://via.placeholder.com/600x600?text=Watch+1",
      "https://via.placeholder.com/600x600?text=Watch+1-2",
      "https://via.placeholder.com/600x600?text=Watch+1-3"
    ],
    stock: 45,
    variants: {
      color: ["Nâu", "Đen"]
    },
    description:
      "Đồng hồ thiết kế sang trọng, dây da mềm, phù hợp mọi phong cách."
  }
];

export default products;
// data/products.js

const products = [
  {
    id: 1,
    name: "Áo thun nam basic cotton form rộng",
    price: 120000,
    oldPrice: 199000,
    discount: 40,
    rating: 4.8,
    sold: 1520,
    category: "fashion",
    images: [
      "assets/images/products/fashion/ao-thun-1.jpg",
      "assets/images/products/fashion/ao-thun-1.jpg",
      "assets/images/products/fashion/ao-thun-1.jpg"
    ],
    stock: 120
  },
  {
    id: 2,
    name: "Giày thể thao nam chạy bộ êm chân",
    price: 350000,
    oldPrice: 520000,
    discount: 33,
    rating: 4.6,
    sold: 980,
    category: "fashion",
    images: [
      "assets/images/products/fashion/giay-1.jpg",
      "assets/images/products/fashion/giay-1.jpg",
      "assets/images/products/fashion/giay-1.jpg"
    ],
    stock: 55
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth chống ồn cao cấp",
    price: 250000,
    oldPrice: 400000,
    discount: 38,
    rating: 4.7,
    sold: 2100,
    category: "electronics",
    images: [
      "assets/images/products/electronics/tai-nghe-1.jpg",
      "assets/images/products/electronics/tai-nghe-1.jpg",
      "assets/images/products/electronics/tai-nghe-1.jpg"
    ],
    stock: 300
  },
  {
    id: 4,
    name: "Balo laptop chống nước thời trang",
    price: 180000,
    oldPrice: 300000,
    discount: 40,
    rating: 4.5,
    sold: 760,
    category: "accessories",
    images: [
      "assets/images/products/accessories/balo-1.jpg",
      "assets/images/products/accessories/balo-1.jpg",
      "assets/images/products/accessories/balo-1.jpg"
    ],
    stock: 80
  },
  {
    id: 5,
    name: "Đồng hồ nam dây da cao cấp",
    price: 450000,
    oldPrice: 700000,
    discount: 36,
    rating: 4.9,
    sold: 540,
    category: "watch",
    images: [
      "assets/images/products/watch/dong-ho-1.jpg",
      "assets/images/products/watch/dong-ho-1.jpg",
      "assets/images/products/watch/dong-ho-1.jpg"
    ],
    stock: 45
  }
];

export default products;

<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Detail</title>
<link rel="stylesheet" href="assets/css/product.css">
</head>

<body>

<div class="product-page">

  <div class="product-images">
    <img id="mainImg" class="main-image" src="" />

    <div class="thumbnail-list" id="thumbs"></div>
  </div>

  <div class="product-info">
    <h1 id="title"></h1>

    <div class="product-price">
      <span id="price"></span>
      <span class="old-price" id="oldPrice"></span>
    </div>

    <p id="desc"></p>

    <div class="quantity">
      <button onclick="changeQty(-1)">-</button>
      <input id="qty" value="1"/>
      <button onclick="changeQty(1)">+</button>
    </div>

    <div class="actions">
      <button class="btn btn-cart" onclick="addCart()">Thêm giỏ hàng</button>
      <button class="btn btn-buy" onclick="buyNow()">Mua ngay</button>
    </div>

  </div>

</div>

<script type="module">
import products from "./data/products.js";

const id = new URLSearchParams(location.search).get("id");
const p = products.find(x => x.id == id);

document.getElementById("title").innerText = p.name;
document.getElementById("price").innerText = p.price.toLocaleString()+"₫";
document.getElementById("oldPrice").innerText = p.oldPrice.toLocaleString()+"₫";
document.getElementById("desc").innerText = p.description;

const mainImg = document.getElementById("mainImg");
mainImg.src = p.images[0];

const thumbs = document.getElementById("thumbs");

p.images.forEach(img=>{
  const i = document.createElement("img");
  i.src = img;
  i.onclick = ()=> mainImg.src = img;
  thumbs.appendChild(i);
});

window.changeQty = (v)=>{
  const q = document.getElementById("qty");
  let val = parseInt(q.value);
  val += v;
  if(val < 1) val = 1;
  q.value = val;
};

window.addCart = ()=>{
  let cart = JSON.parse(localStorage.getItem("cart")||"[]");

  const qty = parseInt(document.getElementById("qty").value);

  const exist = cart.find(x=>x.id==p.id);

  if(exist){
    exist.qty += qty;
  }else{
    cart.push({...p, qty});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ");
};

window.buyNow = ()=>{
  addCart();
  location.href="cart.html";
};
</script>

</body>
</html>