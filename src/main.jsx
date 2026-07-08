import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import AppRouter from "./router/AppRouter";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

// CSS
import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/layout.css";
import "./assets/css/responsive.css";
import "./components/Common/Common.css";
import "./components/Floating/Floating.css";

// Khởi tạo root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render cấu trúc component hoàn chỉnh
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <AppRouter />
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);