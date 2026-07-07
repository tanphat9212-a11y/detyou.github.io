import {
    useCart
}
from "../../context/CartContext";
import "./Header.css";

import SearchBox from "../Search/SearchBox";

import {
    Link
}
from "react-router-dom";

import {
    useCart
}
from "../../context/CartContext";
export default function Header(){
const {

    cart

}=useCart();

    return(

        <header className="header">


            <div className="container">


                <div className="header-content">


                    <Link

                        to="/"

                        className="logo"

                    >

                        TGDD

                    </Link>



                    <SearchBox />



                    <div className="header-menu">


                        <Link to="/products">

                            Sản phẩm

                        </Link>



                        <Link

                        to="/cart"

                        className="cart-link"

                        >

                              🛒 Giỏ hàng

                              <span className="cart-count">

                                  {
                                     cart.reduce(
 
                                            (sum,item)=>

                                            sum + item.quantity
 
                                            ,0
                                        )
                                  }

                              </span>


                        </Link>
                        <Link to="/cart">

                            🛒 Giỏ hàng

                        </Link>

                        <Link to="/account">

                            👤 Tài khoản

                        </Link>

                    </div>


                </div>


            </div>


        </header>

    );

}