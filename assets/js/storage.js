function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}
const Storage = {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};