import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Kiểm tra sản phẩm đã tồn tại trong giỏ chưa
      const isExist = prevItems.find((item) => item.id === product.id);
      if (isExist) {
        // Nếu có rồi thì tăng số lượng lên 1
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Nếu chưa có thì thêm mới vào mảng với số lượng ban đầu là 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

