import {
    useState
}
from "react";


import {

    useNavigate

}
from "react-router-dom";


import {

    useCart

}
from "../../context/CartContext";


import "./Checkout.css";



export default function Checkout(){
   if(!user){

    return(

        <div className="container">

            <h2>

                Vui lòng đăng nhập để thanh toán

            </h2>

        </div>

    );

} 

    const {

        cart

    } = useCart();



    const navigate=useNavigate();



    const [info,setInfo]=useState({

        name:"",

        phone:"",

        address:""

    });

    const {

        createOrder

    }=useOrder();

    import {

         useAuth

    }
    from "../../context/AuthContext";

    const total=cart.reduce(

        (sum,item)=>

        sum + item.price * item.quantity

        ,0

    );




    function submitOrder(e){


        e.preventDefault();
        
        createOrder({
                customer:info,

                products:cart,

                total:total

        }); 

        alert(  

            "Đặt hàng thành công!"

        );


        navigate("/");


    }




    return(

        <section className="checkout-page">


            <div className="container">


                <div className="checkout-box">


                    <h1>

                        Thanh toán

                    </h1>



                    <form

                    onSubmit={submitOrder}

                    >



                        <input

                        placeholder="Họ và tên"

                        value={info.name}

                        onChange={e=>

                            setInfo({

                                ...info,

                                name:e.target.value

                            })

                        }

                        />




                        <input

                        placeholder="Số điện thoại"

                        value={info.phone}

                        onChange={e=>

                            setInfo({

                                ...info,

                                phone:e.target.value

                            })

                        }

                        />





                        <input

                        placeholder="Địa chỉ nhận hàng"

                        value={info.address}

                        onChange={e=>

                            setInfo({

                                ...info,

                                address:e.target.value

                            })

                        }

                        />




                        <div className="checkout-total">


                            Tổng tiền:

                            <b>

                            {total.toLocaleString()}₫

                            </b>


                        </div>




                        <button>

                            Đặt hàng

                        </button>



                    </form>


                </div>


            </div>


        </section>

    );

}
import {
    useOrder
}
from "../../context/OrderContext";