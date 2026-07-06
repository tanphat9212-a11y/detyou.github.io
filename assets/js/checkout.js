/* =========================
   SHOPVN CHECKOUT.JS
   ========================= */

/* CART STORAGE */
const CART_KEY = "shopvn_cart";

/* GET CART */
function getCart(){
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

/* SAVE CART */
function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* CALCULATE TOTAL */
function calcTotal(cart){
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* RENDER ORDER ITEMS */
function renderCheckout(){
    const cart = getCart();
    const list = document.querySelector(".checkout-products");
    const totalEl = document.querySelector(".checkout-total");

    if(!list) return;

    list.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <img src="${item.image}">
            <div>
                <h4>${item.name}</h4>
                <p>Số lượng: ${item.qty}</p>
                <p class="price">${(item.price * item.qty).toLocaleString()}₫</p>
            </div>
        `;

        list.appendChild(div);
    });

    if(totalEl){
        totalEl.textContent = calcTotal(cart).toLocaleString() + "₫";
    }
}

/* PLACE ORDER */
function placeOrder(){
    const cart = getCart();

    if(cart.length === 0){
        alert("Giỏ hàng trống");
        return;
    }

    const order = {
        id: "SHOP" + Date.now(),
        items: cart,
        total: calcTotal(cart),
        date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("shopvn_orders")) || [];
    orders.push(order);
    localStorage.setItem("shopvn_orders", JSON.stringify(orders));

    localStorage.removeItem(CART_KEY);

    alert("Đặt hàng thành công!");
    window.location.href = "orders.html";
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {

    renderCheckout();

    const btn = document.querySelector(".btn-primary");
    if(btn){
        btn.addEventListener("click", placeOrder);
    }

});