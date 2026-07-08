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

import {
    HelmetProvider
}
from "react-helmet-async";


import AppRouter from "./router/AppRouter";


import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/layout.css";
import "./assets/css/responsive.css";


import "./components/Common/Common.css";
import "./components/Floating/Floating.css";



ReactDOM.createRoot(document.getElementById("root")).render(

    <OrderProvider>

        <AuthProvider>

            <CartProvider>

                <AppRouter />

            </CartProvider>

        </AuthProvider>

    </OrderProvider>

);

import {
    CartProvider
}
from "./context/CartContext";
import {
    AuthProvider
}
from "./context/AuthContext";

<HelmetProvider>

    <AuthProvider>

        <CartProvider>

            <AppRouter />

        </CartProvider>

    </AuthProvider>

</HelmetProvider>