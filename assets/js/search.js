const params = new URLSearchParams(window.location.search);

const keyword =
(params.get("q") || "").toLowerCase();

document.getElementById("title").innerHTML =
`Kết quả tìm kiếm cho "${keyword}"`;

const result = products.filter(product =>
product.name.toLowerCase().includes(keyword)
);

const container =
document.getElementById("product-list");

container.innerHTML = result.map(product => `
<div class="product-card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.price.toLocaleString()}đ</p>
</div>
`).join("");