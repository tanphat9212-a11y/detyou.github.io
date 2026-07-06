/* =========================
   SHOPVN MAIN.JS
   ========================= */

/* CART KEY */
const CART_KEY = "shopvn_cart";

/* GET CART */
function getCart(){
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

/* SAVE CART */
function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ADD TO CART */
function addToCart(product){
    let cart = getCart();

    const index = cart.findIndex(item => item.id === product.id);

    if(index !== -1){
        cart[index].qty += 1;
    }else{
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    saveCart(cart);
    updateCartCount();

    alert("Đã thêm vào giỏ hàng");
}

/* REMOVE ITEM */
function removeFromCart(id){
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
}

/* UPDATE QTY */
function updateQty(id, qty){
    let cart = getCart();

    const item = cart.find(i => i.id === id);
    if(item){
        item.qty = qty > 0 ? qty : 1;
    }

    saveCart(cart);
}

/* CART COUNT */
function updateCartCount(){
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    const el = document.querySelector(".cart-count");
    if(el){
        el.textContent = count;
    }
}

/* RENDER CART PAGE */
function renderCart(){
    const cart = getCart();
    const container = document.querySelector(".cart-list");
    const totalEl = document.querySelector(".cart-total");

    if(!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.image}">
            <div class="info">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()}₫</p>
                <input type="number" value="${item.qty}" min="1" onchange="changeQty('${item.id}', this.value)">
                <button onclick="removeItem('${item.id}')">Xóa</button>
            </div>
        `;

        container.appendChild(div);
    });

    if(totalEl){
        totalEl.textContent = total.toLocaleString() + "₫";
    }
}

/* CHANGE QTY */
function changeQty(id, qty){
    updateQty(id, parseInt(qty));
    renderCart();
}

/* REMOVE ITEM UI */
function removeItem(id){
    removeFromCart(id);
    renderCart();
}

/* SEARCH */
function searchProduct(){
    const input = document.querySelector(".search-input");
    if(!input) return;

    const keyword = input.value.trim();
    if(keyword){
        window.location.href = `search.html?q=${encodeURIComponent(keyword)}`;
    }
}

/* INIT */
ddocument.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("main-search-input");
    const searchBtn = document.getElementById("main-search-btn");

    if (!searchInput || !searchBtn) return;

    function executeSearch() {
        const keyword = searchInput.value.trim();
        if (!keyword) return;

        window.location.href =
            "search.html?q=" + encodeURIComponent(keyword);
    }
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("main-search-input");
    const searchBtn = document.getElementById("main-search-btn");

    if (!searchInput || !searchBtn) return;

    function executeSearch() {
        const keyword = searchInput.value.trim();
        if (!keyword) return;

        window.location.href =
            "search.html?q=" + encodeURIComponent(keyword);
    }

    searchBtn.addEventListener("click", executeSearch);

    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            executeSearch();
        }
    });
});