import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Nhập cấu trúc Layout chung
import Layout from "../components/Layout/Layout";

// Nhập toàn bộ các Trang (Pages) theo đúng đường dẫn thực tế của bạn
import Home from "../pages/Home";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Account from "../pages/Account/Account";
import NewsDetail from "../pages/NewsDetail/NewsDetail"; // ✨ 1. Đã chèn dòng import trang đọc báo ở đây

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Trang chủ */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* Trang sản phẩm & Trang chi tiết sản phẩm */}
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />

        {/* ✨ 2. TUYẾN ĐƯỜNG ĐỘNG XEM CHI TIẾT BÀI BÁO (MỚI THÊM) */}
        <Route path="/news/:id" element={<Layout><NewsDetail /></Layout>} />

        {/* Trang tìm kiếm */}
        <Route path="/search" element={<Layout><Search /></Layout>} />

        {/* Các trang chức năng: Giỏ hàng, Tài khoản, Đơn hàng */}
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/account" element={<Layout><Account /></Layout>} />

        {/* HỆ THỐNG ĐỊNH TUYẾN DANH MỤC SẢN PHẨM TỰ ĐỘNG */}
        <Route path="/dien-thoai" element={<Layout><Products category="dien-thoai" /></Layout>} />
        <Route path="/laptop" element={<Layout><Products category="laptop" /></Layout>} />
        <Route path="/tablet" element={<Layout><Products category="tablet" /></Layout>} />
        <Route path="/tai-nghe" element={<Layout><Products category="tai-nghe" /></Layout>} />
        <Route path="/dong-ho" element={<Layout><Products category="dong-ho" /></Layout>} />

        {/* Trang báo lỗi 404 nếu người dùng nhập sai đường dẫn */}
        <Route
          path="*"
          element = {
            <Layout>
              <h2 style={{ textAlign: "center", margin: "50px" }}>
                Không tìm thấy trang
              </h2>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

