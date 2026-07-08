import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Account from "../pages/Account/Account";
import NewsDetail from "../pages/NewsDetail/NewsDetail";

export default function AppRouter() {
  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />

        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />

        <Route path="/news/:id" element={<Layout><NewsDetail /></Layout>} />

        <Route path="/search" element={<Layout><Search /></Layout>} />

        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/account" element={<Layout><Account /></Layout>} />

        <Route path="/dien-thoai" element={<Layout><Products category="dien-thoai" /></Layout>} />
        <Route path="/laptop" element={<Layout><Products category="laptop" /></Layout>} />
        <Route path="/tablet" element={<Layout><Products category="tablet" /></Layout>} />
        <Route path="/tai-nghe" element={<Layout><Products category="tai-nghe" /></Layout>} />
        <Route path="/dong-ho" element={<Layout><Products category="dong-ho" /></Layout>} />

        <Route
          path="*"
          element={
            <Layout>
              <h2 style={{ textAlign: "center", margin: "50px" }}>
                Không tìm thấy trang
              </h2>
            </Layout>
          }
        />

      </Routes>
    </HashRouter>
  );
}