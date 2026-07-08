import {
    AuthProvider
}
from "./context/AuthContext";


import {
    OrderProvider
}
from "./context/OrderContext";

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

import AppRouter from "./router/AppRouter";

import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/layout.css";
import "./assets/css/responsive.css";

import "./components/Common/Common.css";
import "./components/Floating/Floating.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <OrderProvider>
        <AuthProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </AuthProvider>
      </OrderProvider>
    </HelmetProvider>
  </React.StrictMode>
);