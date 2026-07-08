import "./Cart.css";

import {
    useCart
}
from "../../context/CartContext";


import CartItem from "../../components/Cart/CartItem";



export default function Cart(){


    const {
        cart
    } = useCart();



    const total = cart.reduce(

        (sum,item)=>

        sum + item.price * item.quantity

        ,0

    );



    return(

        <section className="cart-page">


            <div className="container">


                <h1>

                    Giỏ hàng

                </h1>



                {
                    cart.length===0

                    ?

                    <p>

                        Chưa có sản phẩm trong giỏ

                    </p>

                    :


                    <>


                    <div className="cart-list">


                        {
                            cart.map(item=>(

                                <CartItem

                                    key={item.id}

                                    item={item}

                                />

                            ))
                        }


                    </div>



                    <div className="cart-total">


                        Tổng tiền:

                        <b>

                        {total.toLocaleString()}₫

                        </b>

                        <Link
                             to="/checkout"
                             className="checkout-btn"

                        >
                            Tiến hành thanh toán

                        </Link>      



                    </div>


                    </>

                }


            </div>


        </section>

    );

}
