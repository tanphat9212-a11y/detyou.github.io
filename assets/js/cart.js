/*======================================================

    DETYOU SHOP
    CART

======================================================*/

class Cart {

    constructor(){

        this.storage="shopping_cart";

        this.cart=this.load();

        this.updateBadge();

    }

    load(){

        return JSON.parse(

            localStorage.getItem(this.storage)

        )||[];

    }

    save(){

        localStorage.setItem(

            this.storage,

            JSON.stringify(this.cart)

        );

        this.updateBadge();

    }

    add(product,quantity=1){

        const index=this.cart.findIndex(

            item=>item.id===product.id

        );

        if(index>-1){

            this.cart[index].quantity+=quantity;

        }

        else{

            this.cart.push({

                ...product,

                quantity

            });

        }

        this.save();

    }

    remove(id){

        this.cart=this.cart.filter(

            item=>item.id!==id

        );

        this.save();

    }

    clear(){

        this.cart=[];

        this.save();

    }

    total(){

        return this.cart.reduce(

            (sum,item)=>

            sum+

            item.salePrice*

            item.quantity,

            0

        );

    }

    count(){

        return this.cart.reduce(

            (sum,item)=>sum+item.quantity,

            0

        );

    }

    updateBadge(){

        const badge=

        document.querySelector("#cartCount");

        if(!badge) return;

        badge.textContent=this.count();

    }

}

window.CartAPI=new Cart(); 

/*======================================================

    DETYOU SHOP
    CART PAGE
    VERSION 2.0

======================================================*/

class CartPage {

    constructor() {

        this.shipping = 30000;

        this.discount = 0;

        this.storage = "shopping_cart";

        this.body = document.querySelector("#cartBody");

        this.subTotal = document.querySelector("#subTotal");

        this.discountBox = document.querySelector("#discount");

        this.grandTotal = document.querySelector("#grandTotal");

        this.voucher = document.querySelector("#voucher");

        this.checkout = document.querySelector("#checkoutBtn");

        this.checkAll = document.querySelector("#checkAll");

        this.load();

        this.events();

    }

    /*==========================================*/

    load() {

        this.cart = JSON.parse(

            localStorage.getItem(this.storage)

        ) || [];

        this.render();

    }

    /*==========================================*/

    save() {

        localStorage.setItem(

            this.storage,

            JSON.stringify(this.cart)

        );

        this.render();

    }

    /*==========================================*/

    money(price) {

        return Number(price)

        .toLocaleString("vi-VN") + "đ";

    }

    /*==========================================*/

    render() {

        if (!this.body) return;

        if (!this.cart.length) {

            this.empty();

            return;

        }

        this.body.innerHTML = "";

        this.cart.forEach(item => {

            this.body.innerHTML += `

<tr>

<td>

<input

class="item-check"

type="checkbox"

checked

data-id="${item.id}">

</td>

<td>

<div class="cart-product">

<img src="${item.image}">

<div class="cart-product-info">

<div class="cart-product-name">

${item.name}

</div>

<div class="cart-product-category">

${item.category}

</div>

</div>

</div>

</td>

<td>

<div class="cart-price">

${this.money(item.salePrice)}

</div>

<span class="cart-old-price">

${this.money(item.price)}

</span>

</td>

<td>

<div class="quantity-box">

<button

onclick="cartPage.minus(${item.id})">

-

</button>

<input

readonly

value="${item.quantity}">

<button

onclick="cartPage.plus(${item.id})">

+

</button>

</div>

</td>

<td>

<strong>

${this.money(

item.salePrice*item.quantity

)}

</strong>

</td>

<td>

<button

class="remove-item"

onclick="cartPage.remove(${item.id})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

        });

        this.total();

    }

    /*==========================================*/

    total() {

        let total = 0;

        document

        .querySelectorAll(".item-check")

        .forEach(check => {

            if (check.checked) {

                const id = Number(check.dataset.id);

                const item = this.cart.find(

                    p => p.id === id

                );

                total +=

                item.salePrice *

                item.quantity;

            }

        });

        this.subTotal.textContent =

        this.money(total);

        this.discountBox.textContent =

        "-" +

        this.money(this.discount);

        const grand =

        total +

        this.shipping -

        this.discount;

        this.grandTotal.textContent =

        this.money(grand);

    }

    /*==========================================*/

    plus(id) {

        const item = this.cart.find(

            p=>p.id===id

        );

        item.quantity++;

        this.save();

    }

    /*==========================================*/

    minus(id) {

        const item = this.cart.find(

            p=>p.id===id

        );

        if(item.quantity>1){

            item.quantity--;

        }

        this.save();

    }

    /*==========================================*/

    remove(id){

        this.cart=this.cart.filter(

            p=>p.id!==id

        );

        this.save();

    }

    /*==========================================*/

    empty(){

        document

        .querySelector(".cart-left")

        .innerHTML=`

<div class="empty-cart">

<i class="fa-solid fa-cart-shopping"></i>

<h2>

Giỏ hàng trống

</h2>

<p>

Hãy thêm sản phẩm để mua sắm

</p>

<a href="../index.html">

Tiếp tục mua sắm

</a>

</div>

`;

        this.subTotal.textContent="0đ";

        this.discountBox.textContent="0đ";

        this.grandTotal.textContent="0đ";

    }

    /*==========================================*/

    applyVoucher(){

        const code=

        this.voucher.value

        .trim()

        .toUpperCase();

        switch(code){

            case"SALE50":

            this.discount=50000;

            break;

            case"SALE100":

            this.discount=100000;

            break;

            case"FREESHIP":

            this.discount=this.shipping;

            break;

            default:

            this.discount=0;

            alert("Mã giảm giá không hợp lệ");

        }

        this.total();

    }

    /*==========================================*/

    events(){

        document.addEventListener(

        "change",

        e=>{

            if(

            e.target.classList.contains(

            "item-check"

            )

            ){

                this.total();

            }

        });

        this.checkAll?.addEventListener(

        "change",

        e=>{

            document

            .querySelectorAll(".item-check")

            .forEach(item=>{

                item.checked=

                e.target.checked;

            });

            this.total();

        });

        document

        .querySelector("#applyVoucher")

        ?.addEventListener(

        "click",

        ()=>{

            this.applyVoucher();

        });

        this.checkout?.addEventListener(

        "click",

        ()=>{

            if(!this.cart.length){

                alert(

                "Giỏ hàng đang trống"

                );

                return;

            }

            location.href=

            "checkout.html";

        });

    }

}

const cartPage=new CartPage();