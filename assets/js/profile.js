/* =========================
   SHOPVN PROFILE.JS
   ========================= */

/* STORAGE KEY */
const USER_KEY = "shopvn_user";

/* GET USER */
function getUser(){
    return JSON.parse(localStorage.getItem(USER_KEY));
}

/* SAVE USER */
function saveUser(user){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

/* LOAD PROFILE */
function loadProfile(){
    const user = getUser();
    if(!user) return;

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const address = document.querySelector("#address");

    if(name) name.value = user.name || "";
    if(email) email.value = user.email || "";
    if(phone) phone.value = user.phone || "";
    if(address) address.value = user.address || "";
}

/* UPDATE PROFILE */
function updateProfile(){
    const user = getUser();
    if(!user) return;

    const name = document.querySelector("#name")?.value;
    const email = document.querySelector("#email")?.value;
    const phone = document.querySelector("#phone")?.value;
    const address = document.querySelector("#address")?.value;

    const updated = {
        ...user,
        name,
        email,
        phone,
        address
    };

    saveUser(updated);

    alert("Cập nhật thành công!");
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    loadProfile();

    const btn = document.querySelector(".btn");
    if(btn){
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            updateProfile();
        });
    }
});