/*======================================================

    DETYOU SHOP
    CATEGORY

======================================================*/

const categories = [

{

name:"Thời Trang",

icon:"fa-shirt",

image:"assets/images/categories/fashion.jpg"

},

{

name:"Điện Thoại",

icon:"fa-mobile-screen",

image:"assets/images/categories/phone.jpg"

},

{

name:"Laptop",

icon:"fa-laptop",

image:"assets/images/categories/laptop.jpg"

},

{

name:"Đồng Hồ",

icon:"fa-clock",

image:"assets/images/categories/watch.jpg"

},

{

name:"Giày Dép",

icon:"fa-shoe-prints",

image:"assets/images/categories/shoes.jpg"

},

{

name:"Mỹ Phẩm",

icon:"fa-wand-magic-sparkles",

image:"assets/images/categories/cosmetic.jpg"

},

{

name:"Túi Xách",

icon:"fa-bag-shopping",

image:"assets/images/categories/bag.jpg"

},

{

name:"Đồ Gia Dụng",

icon:"fa-house",

image:"assets/images/categories/home.jpg"

},

{

name:"Máy Ảnh",

icon:"fa-camera",

image:"assets/images/categories/camera.jpg"

},

{

name:"Tai Nghe",

icon:"fa-headphones",

image:"assets/images/categories/headphone.jpg"

}

];

function renderCategories(){

const grid=document.querySelector("#categoryGrid");

if(!grid) return;

grid.innerHTML="";

categories.forEach(category=>{

grid.innerHTML+=`

<div class="category-card">

<div class="category-image">

<img src="${category.image}">

</div>

<div class="category-icon">

<i class="fa-solid ${category.icon}"></i>

</div>

<h3>

${category.name}

</h3>

</div>

`;

});

}

document.addEventListener("DOMContentLoaded",renderCategories);