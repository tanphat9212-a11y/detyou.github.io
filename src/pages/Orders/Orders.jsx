import {

    useOrder

}
from "../../context/OrderContext";


import "./Orders.css";



export default function Orders(){


    const {

        orders

    }=useOrder();



    return(

        <section className="orders-page">


            <div className="container">


                <h1>

                    Lịch sử mua hàng

                </h1>




                {

                orders.length===0


                ?


                <p>

                    Bạn chưa có đơn hàng nào

                </p>


                :



                orders.map(order=>(


                    <div

                    className="order-box"

                    key={order.id}

                    >



                        <h3>

                            Đơn hàng #{order.id}

                        </h3>



                        <p>

                            Ngày đặt: {order.date}

                        </p>



                        <p>

                            Người nhận:

                            {order.customer.name}

                        </p>



                        <div>


                        {

                        order.products.map(item=>(


                            <p key={item.id}>


                                {item.name}

                                {" x "}

                                {item.quantity}


                            </p>


                        ))

                        }


                        </div>




                        <strong>

                            Tổng:

                            {" "}

                            {order.total.toLocaleString()}₫


                        </strong>


                    </div>


                ))

                }


            </div>


        </section>

    );

}
