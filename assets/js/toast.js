/* =========================
   SHOPVN TOAST.JS
   ========================= */

function createToastContainer(){
    let container = document.querySelector(".toast-container");

    if(!container){
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    return container;
}

function showToast(message, type = "success", duration = 3000){
    const container = createToastContainer();

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    const icon = type === "success" ? "✔" :
                 type === "error" ? "✖" :
                 type === "warning" ? "⚠" : "ℹ";

    toast.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="msg">${message}</span>
        <span class="close">&times;</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => toast.remove(), 400);
    }, duration);

    toast.querySelector(".close").onclick = () => {
        toast.classList.add("hide");
        setTimeout(() => toast.remove(), 400);
    };
}

/* AUTO STYLE */
const style = document.createElement("style");
style.innerHTML = `
.toast-container{
    position:fixed;
    top:20px;
    right:20px;
    z-index:99999;
    display:flex;
    flex-direction:column;
    gap:10px;
}

.toast{
    min-width:260px;
    padding:12px 15px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
    box-shadow:0 10px 25px rgba(0,0,0,.15);
    animation:fadeIn .3s ease;
}

.toast.success{ background:#00b14f; }
.toast.error{ background:#ff3b30; }
.toast.warning{ background:#ffb400; }
.toast.info{ background:#2f80ed; }

.toast .icon{
    font-weight:900;
}

.toast .msg{
    flex:1;
    font-size:14px;
}

.toast .close{
    cursor:pointer;
    font-size:18px;
    opacity:.8;
}

.toast.hide{
    opacity:0;
    transform:translateX(30px);
    transition:.4s;
}
`;

document.head.appendChild(style);