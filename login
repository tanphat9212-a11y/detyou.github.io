<div class="auth">

  <h2>Đăng nhập</h2>

  <input id="email" placeholder="Email">
  <input id="password" type="password" placeholder="Mật khẩu">

  <button onclick="login()">Login</button>

</div>

<script>
function login(){

  const user = {
    email: document.getElementById("email").value
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Đăng nhập thành công");

  window.location.href = "/";
}
</script>