/* =========================
   SHOPVN WISHLIST.JS
   ========================= */

const WISHLIST_KEY = "shopvn_wishlist";

/* GET */
function getWishlist(){
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

/* SAVE */
function saveWishlist(list){
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

/* ADD */
function addToWishlist(product){
    let list = getWishlist();

    const exists = list.find(i => i.id === product.id);

    if(!exists){
        list.push(product);
        saveWishlist(list);
        showToast("Đã thêm vào yêu thích ❤️", "success");
    }else{
        showToast("Sản phẩm đã có trong yêu thích", "warning");
    }

    updateWishlistCount();
}

/* REMOVE */
function removeFromWishlist(id){
    let list = getWishlist();
    list = list.filter(i => i.id !== id);

    saveWishlist(list);
    updateWishlistCount();
    renderWishlist();

    showToast("Đã xóa khỏi yêu thích", "info");
}

/* COUNT */
function updateWishlistCount(){
    const list = getWishlist();
    const el = document.querySelector(".wishlist-count");

    if(el){
        el.textContent = list.length;
    }
}

/* RENDER */
function renderWishlist(){
    const list = getWishlist();
    const container = document.querySelector(".wishlist-list");

    if(!container) return;

    container.innerHTML = "";

    if(list.length === 0){
        container.innerHTML = `
            <div class="empty">
                <h3>Chưa có sản phẩm yêu thích</h3>
            </div>
        `;
        return;
    }

    list.forEach(item => {
        const div = document.createElement("div");
        div.className = "wishlist-item";

        div.innerHTML = `
            <img src="${item.image}" />
            <div class="info">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
            </div>
            <div class="actions">
                <button class="btn-buy">Mua</button>
                <button class="btn-remove">Xóa</button>
            </div>
        `;

        div.querySelector(".btn-remove").onclick = () => {
            removeFromWishlist(item.id);
        };

        container.appendChild(div);
    });
}

/* TOGGLE */
function toggleWishlist(product){
    const list = getWishlist();
    const exists = list.find(i => i.id === product.id);

    if(exists){
        removeFromWishlist(product.id);
    }else{
        addToWishlist(product);
    }
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    updateWishlistCount();
    renderWishlist();
});