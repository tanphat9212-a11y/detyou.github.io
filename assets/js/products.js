/*======================================================

    DETYOU SHOP
    PRODUCTS
    VERSION 2.0

======================================================*/

class ProductManager {

    constructor() {

        this.products = [];

        this.filtered = [];

        this.currentPage = 1;

        this.perPage = 10;

        this.grid = document.querySelector("#productGrid");

        this.pagination = document.querySelector("#pagination");

    }

    /*==========================================*/

    async load() {

        const response = await fetch("data/products.json");

        this.products = await response.json();

        this.filtered = [...this.products];

        this.render();

    }

    /*==========================================*/

    money(price) {

        return Number(price).toLocaleString("vi-VN") + "đ";

    }

    /*==========================================*/

    stars(rate) {

        let html = "";

        for(let i=1;i<=5;i++){

            if(i<=rate){

                html+=`<i class="fa-solid fa-star"></i>`;

            }else{

                html+=`<i class="fa-regular fa-star"></i>`;

            }

        }

        return html;

    }

    /*==========================================*/

    discount(product){

        return Math.round(

            (1-product.salePrice/product.price)*100

        );

    }

    /*==========================================*/

    card(product){

        return `

<div class="product-card">

<div class="product-image">

<img

loading="lazy"

src="${product.image}"

alt="${product.name}">

<div class="discount-badge">

-${this.discount(product)}%

</div>

<div class="favorite">

<i class="fa-regular fa-heart"></i>

</div>

<div class="mall">

Mall

</div>

<div class="free-ship">

Free Ship

</div>

<a

href="pages/product-detail.html?id=${product.id}"

class="quick-view">

Xem nhanh

</a>

</div>

<div class="product-info">

<div class="product-name">

${product.name}

</div>

<div class="rating">

${this.stars(product.rating)}

<span>

(${product.sold})

</span>

</div>

<div class="product-price">

<div class="sale">

${this.money(product.salePrice)}

</div>

<div class="old">

${this.money(product.price)}

</div>

</div>

<div class="product-footer">

<div class="sold">

Đã bán ${product.sold}

</div>

<button

class="cart-btn"

onclick="productManager.addCart(${product.id})">

<i class="fa-solid fa-cart-shopping"></i>

</button>

</div>

</div>

</div>

`;

    }

    /*==========================================*/

    render(){

        if(!this.grid) return;

        const start=(this.currentPage-1)*this.perPage;

        const end=start+this.perPage;

        const list=this.filtered.slice(start,end);

        this.grid.innerHTML="";

        list.forEach(product=>{

            this.grid.innerHTML+=this.card(product);

        });

        this.renderPagination();

    }

    /*==========================================*/

    renderPagination(){

        if(!this.pagination) return;

        const total=Math.ceil(

            this.filtered.length/

            this.perPage

        );

        this.pagination.innerHTML="";

        for(let i=1;i<=total;i++){

            this.pagination.innerHTML+=`

<div

class="page ${i===this.currentPage?'active':''}"

onclick="productManager.goto(${i})">

${i}

</div>

`;

        }

    }

    /*==========================================*/

    goto(page){

        this.currentPage=page;

        this.render();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    /*==========================================*/

    search(keyword){

        keyword=keyword.toLowerCase();

        this.filtered=this.products.filter(product=>

            product.name

            .toLowerCase()

            .includes(keyword)

        );

        this.currentPage=1;

        this.render();

    }

    /*==========================================*/

    category(category){

        this.filtered=this.products.filter(product=>

            product.category===category

        );

        this.currentPage=1;

        this.render();

    }

    /*==========================================*/

    sort(type){

        switch(type){

            case"price-asc":

            this.filtered.sort(

            (a,b)=>a.salePrice-b.salePrice

            );

            break;

            case"price-desc":

            this.filtered.sort(

            (a,b)=>b.salePrice-a.salePrice

            );

            break;

            case"sold":

            this.filtered.sort(

            (a,b)=>b.sold-a.sold

            );

            break;

            case"rating":

            this.filtered.sort(

            (a,b)=>b.rating-a.rating

            );

            break;

            case"new":

            this.filtered.sort(

            (a,b)=>b.id-a.id

            );

            break;

        }

        this.render();

    }

    /*==========================================*/

    addCart(id){

        const product=this.products.find(

            item=>item.id===id

        );

        if(!product) return;

        CartAPI.add(product);

        this.toast(

            "Đã thêm vào giỏ hàng"

        );

    }

    /*==========================================*/

    toast(message){

        let toast=document.createElement("div");

        toast.className="toast";

        toast.innerHTML=`

<i class="fa-solid fa-circle-check"></i>

<span>${message}</span>

`;

        document.body.appendChild(toast);

        setTimeout(()=>{

            toast.classList.add("show");

        },50);

        setTimeout(()=>{

            toast.classList.remove("show");

            setTimeout(()=>{

                toast.remove();

            },300);

        },2200);

    }

}

const productManager=new ProductManager();

document.addEventListener(

"DOMContentLoaded",

()=>{

productManager.load();

});
const params=new URLSearchParams(location.search);

const id=params.get("id");

let product;

async function loadProduct(){

const response=await fetch("../data/products.json");

const products=await response.json();

product=products.find(item=>item.id==id);

render(product);

related(products);

}

function money(price){

return Number(price).toLocaleString("vi-VN")+"đ";

}

function render(item){

document.querySelector("#productName").textContent=item.name;

document.querySelector("#salePrice").textContent=

money(item.salePrice);

document.querySelector("#price").textContent=

money(item.price);

document.querySelector("#description").textContent=

item.description;

document.querySelector("#soldCount").textContent=

item.sold+" đã bán";

document.querySelector("#mainImage").src=item.image;

document.querySelector("#ratingStars").innerHTML=

"★★★★★";

const thumb=document.querySelector("#thumbnailList");

for(let i=0;i<4;i++){

thumb.innerHTML+=`

<div class="thumbnail ${i==0?"active":""}">

<img src="${item.image}">

</div>

`;

}

const colors=["Đen","Trắng","Xám"];

const colorBox=document.querySelector("#colorList");

colors.forEach(color=>{

colorBox.innerHTML+=`

<button>${color}</button>

`;

});

const sizes=["S","M","L","XL"];

const sizeBox=document.querySelector("#sizeList");

sizes.forEach(size=>{

sizeBox.innerHTML+=`

<button>${size}</button>

`;

});

}

function related(products){

const list=products

.filter(item=>item.id!=id)

.slice(0,4);

const box=document.querySelector("#relatedProducts");

list.forEach(item=>{

box.innerHTML+=`

<div class="product-card">

<div class="product-image">

<img src="${item.image}">

</div>

<div class="product-info">

<h3>${item.name}</h3>

<div class="sale">

${money(item.salePrice)}

</div>

</div>

</div>

`;

});

}

document

.querySelector("#plus")

.onclick=()=>{

qty.value++;

};

document

.querySelector("#minus")

.onclick=()=>{

if(qty.value>1)

qty.value--;

};

document

.querySelector("#addCart")

.onclick=()=>{

CartAPI.add(product,Number(qty.value));

};

document

.querySelector("#buyNow")

.onclick=()=>{

CartAPI.add(product,Number(qty.value));

location.href="cart.html";

};

loadProduct();
products.json

↓

products.js

↓

search.js

↓

render()

↓

hiển thị sản phẩm
function loadProducts() {
  document.getElementById("skeleton").style.display = "block";
  document.getElementById("product-list").style.display = "none";

  setTimeout(() => {
    document.getElementById("skeleton").style.display = "none";
    document.getElementById("product-list").style.display = "grid";
  }, 1500);
}

loadProducts();
const skeleton = document.getElementById("skeleton");
const productList = document.getElementById("product-list");

function loadProducts() {
  skeleton.style.display = "grid";
  productList.style.display = "none";

  setTimeout(() => {
    skeleton.style.display = "none";
    productList.style.display = "grid";
  }, 1200);
}

loadProducts();