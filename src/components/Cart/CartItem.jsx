import "./Cart.css";

import {
    useCart
}
from "../../context/CartContext";



export default function CartItem({item}){


    const {

        removeCart,

        updateQuantity

    }=useCart();



    return(

        <div className="cart-item">


            <img

                src={item.image}

                alt=""

            />



            <div>


                <h3>

                    {item.name}

                </h3>



                <strong>

                {item.price.toLocaleString()}₫

                </strong>



                <div className="quantity">


                    <button

                    onClick={()=>updateQuantity(item.id,"minus")}

                    >

                    -

                    </button>



                    <span>

                    {item.quantity}

                    </span>



                    <button

                    onClick={()=>updateQuantity(item.id,"plus")}

                    >

                    +

                    </button>


                </div>



                <button

                className="remove"

                onClick={()=>removeCart(item.id)}

                >

                    Xóa

                </button>


            </div>


        </div>

    );

}