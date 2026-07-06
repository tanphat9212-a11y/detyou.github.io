/* =========================
   SHOPVN AUTH.JS
   ========================= */

const AUTH_KEY = "shopvn_user";

/* SAVE USER */
function saveUser(user){
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

/* GET USER */
function getUser(){
    return JSON.parse(localStorage.getItem(AUTH_KEY));
}

/* LOGOUT */
function logout(){
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "login.html";
}

/* REGISTER */
function registerUser(){
    const firstName = document.querySelector('input[placeholder="Nguyễn"]')?.value;
    const lastName = document.querySelector('input[placeholder="Văn A"]')?.value;
    const email = document.querySelector('input[type="email"]')?.value;
    const phone = document.querySelector('input[placeholder="09xxxxxxxx"]')?.value;
    const pass = document.querySelectorAll('input[type="password"]')[0]?.value;
    const confirm = document.querySelectorAll('input[type="password"]')[1]?.value;

    if(!firstName || !lastName || !email || !phone || !pass){
        alert("Vui lòng nhập đầy đủ thông tin");
        return false;
    }

    if(pass !== confirm){
        alert("Mật khẩu xác nhận không khớp");
        return false;
    }

    const user = {
        name: firstName + " " + lastName,
        email,
        phone,
        password: pass
    };

    saveUser(user);

    alert("Đăng ký thành công!");
    window.location.href = "login.html";

    return false;
}

/* LOGIN */
function loginUser(){
    const email = document.querySelector('input[type="email"]')?.value;
    const pass = document.querySelector('input[type="password"]')?.value;

    const user = getUser();

    if(!user){
        alert("Không tìm thấy tài khoản");
        return false;
    }

    if(email === user.email && pass === user.password){
        localStorage.setItem("shopvn_login", "true");
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    }else{
        alert("Sai email hoặc mật khẩu");
    }

    return false;
}

/* CHECK LOGIN */
function checkLogin(){
    return localStorage.getItem("shopvn_login") === "true";
}

/* AUTO GUARD */
function protectPage(){
    if(!checkLogin()){
        window.location.href = "login.html";
    }
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {

    const registerBtn = document.querySelector(".register-btn");
    if(registerBtn){
        registerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            registerUser();
        });
    }

    const loginBtn = document.querySelector(".login-btn");
    if(loginBtn){
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            loginUser();
        });
    }

}); 
const USER_KEY = "shopvn_user";
const TOKEN_KEY = "shopvn_token";

// fake encode token
function generateToken(user) {
  return btoa(JSON.stringify({
    email: user.email,
    time: Date.now()
  }));
}

// register
function register(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

// login
function login(email, password) {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  if (user && user.email === email && user.password === password) {
    const token = generateToken(user);
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  }

  return false;
}

// check auth
function isAuth() {
  return !!localStorage.getItem(TOKEN_KEY);
}

// logout
function logout() {
  localStorage.removeItem(TOKEN_KEY);
}