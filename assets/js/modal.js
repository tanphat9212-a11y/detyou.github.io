/* =========================
   SHOPVN MODAL.JS
   ========================= */

/* CREATE MODAL */
function createModal(){
    if(document.querySelector(".shopvn-modal")) return;

    const modal = document.createElement("div");
    modal.className = "shopvn-modal";

    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-box">
            <div class="modal-header">
                <h3>Thông báo</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                Nội dung
            </div>
            <div class="modal-footer">
                <button class="modal-btn ok">OK</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".modal-close").onclick = closeModal;
    modal.querySelector(".modal-overlay").onclick = closeModal;
}

/* OPEN MODAL */
function openModal(message, title = "Thông báo"){
    createModal();

    const modal = document.querySelector(".shopvn-modal");
    modal.querySelector(".modal-body").innerHTML = message;
    modal.querySelector(".modal-header h3").innerText = title;

    modal.classList.add("active");
}

/* CLOSE MODAL */
function closeModal(){
    const modal = document.querySelector(".shopvn-modal");
    if(modal){
        modal.classList.remove("active");
    }
}

/* CONFIRM MODAL */
function confirmModal(message, callback){
    createModal();

    const modal = document.querySelector(".shopvn-modal");

    modal.querySelector(".modal-body").innerHTML = message;
    modal.querySelector(".modal-header h3").innerText = "Xác nhận";

    const footer = modal.querySelector(".modal-footer");

    footer.innerHTML = `
        <button class="modal-btn cancel">Hủy</button>
        <button class="modal-btn ok">Đồng ý</button>
    `;

    modal.classList.add("active");

    footer.querySelector(".cancel").onclick = closeModal;
    footer.querySelector(".ok").onclick = () => {
        closeModal();
        if(callback) callback();
    };
}

/* AUTO INIT STYLES */
const style = document.createElement("style");
style.innerHTML = `
.shopvn-modal{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:none;
    align-items:center;
    justify-content:center;
    z-index:9999;
}

.shopvn-modal.active{
    display:flex;
}

.modal-overlay{
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
}

.modal-box{
    width:420px;
    background:#fff;
    border-radius:12px;
    overflow:hidden;
    z-index:2;
    box-shadow:0 15px 40px rgba(0,0,0,.2);
    animation:zoomIn .3s ease;
}

.modal-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    background:#ee4d2d;
    color:#fff;
}

.modal-body{
    padding:20px;
    font-size:15px;
    color:#333;
}

.modal-footer{
    padding:15px;
    display:flex;
    justify-content:flex-end;
    gap:10px;
}

.modal-btn{
    padding:10px 16px;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-weight:700;
}

.modal-btn.ok{
    background:#ee4d2d;
    color:#fff;
}

.modal-btn.cancel{
    background:#eee;
}
`;

document.head.appendChild(style);