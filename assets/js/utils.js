/* =========================
   SHOPVN UTILS.JS
   ========================= */

/* FORMAT CURRENCY */
function formatPrice(value){
    return Number(value).toLocaleString("vi-VN") + "₫";
}

/* GENERATE ID */
function generateId(prefix = "SHOP"){
    return prefix + Date.now() + Math.floor(Math.random() * 1000);
}

/* GET PARAM FROM URL */
function getQueryParam(key){
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

/* SAVE LOCAL STORAGE */
function setStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

/* GET LOCAL STORAGE */
function getStorage(key){
    return JSON.parse(localStorage.getItem(key)) || null;
}

/* REMOVE STORAGE */
function removeStorage(key){
    localStorage.removeItem(key);
}

/* DEBOUNCE */
function debounce(func, delay = 300){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

/* THROTTLE */
function throttle(func, limit = 300){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastCall >= limit){
            lastCall = now;
            func.apply(this, args);
        }
    };
}

/* RANDOM COLOR (UI SUPPORT) */
function randomColor(){
    const colors = ["#ee4d2d", "#00b14f", "#ffb400", "#2f80ed", "#9b59b6"];
    return colors[Math.floor(Math.random() * colors.length)];
}

/* SCROLL TOP */
function scrollToTop(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* CHECK EMPTY */
function isEmpty(value){
    return value === null || value === undefined || value.toString().trim() === "";
}