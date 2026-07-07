import Layout from "../components/Layout/Layout";
import {
    BrowserRouter,
    Routes,
    Route
}
from "react-router-dom";


import Layout from "../components/Layout/Layout";


// Pages

import Home from "../pages/Home";

import Products from "../pages/Products/Products";

import ProductDetail from "../pages/ProductDetail/ProductDetail";

import Cart from "../pages/Cart/Cart";

import Search from "../pages/Search/Search";

import Login from "../pages/Login/Login";

import Orders from "../pages/Orders/Orders";


export default function AppRouter(){


    return(

        <BrowserRouter>


            <Routes>



                <Route

                    path="/"

                    element={

                        <Layout>

                            <Home />

                        </Layout>

                    }

                />




                <Route

                    path="/products"

                    element={

                        <Layout>

                            <Products />

                        </Layout>

                    }

                />




                <Route

                    path="/product/:id"

                    element={

                        <Layout>

                            <ProductDetail />

                        </Layout>

                    }

                />




                <Route

                    path="/cart"

                    element={

                        <Layout>

                            <Cart />

                        </Layout>

                    }

                />




                <Route

                    path="/search"

                    element={

                        <Layout>

                            <Search />

                        </Layout>

                    }

                />




                <Route

                    path="/login"

                    element={

                        <Layout>

                            <Login />

                        </Layout>

                    }
                />    

                 
                import Checkout from "../pages/Checkout/Checkout";
                <Route

                     path="/checkout"

                     element={

                        <Layout>

                            <Checkout />

                        </Layout>

                    }

                />

                <Route

                      path="/orders"

                      element={

                        <Layout>

                            <Orders />

                        </Layout>

                    }

                />
                import Account from "../pages/Account/Account";
                <Route

                     path="/account"

                     element={

                        <Layout>

                             <Account />

                        </Layout>

                    }

                />

                <Route

                    path="*"

                    element={

                        <Layout>

                            <h2

                            style={{

                                textAlign:"center",

                                margin:"50px"

                            }}

                            >

                                Không tìm thấy trang

                            </h2>

                        </Layout>

                    }

                />



            </Routes>


        </BrowserRouter>

    );

}