import {
    createContext,
    useContext,
    useState
}
from "react";


const OrderContext = createContext();



export function OrderProvider({children}){


    const [orders,setOrders] = useState(

        JSON.parse(

            localStorage.getItem("orders")

        )

        ||

        []

    );



    const createOrder=(order)=>{


        const newOrder={

            id:Date.now(),

            date:new Date().toLocaleString(),

            ...order

        };



        const updateOrders=[

            ...orders,

            newOrder

        ];



        setOrders(updateOrders);



        localStorage.setItem(

            "orders",

            JSON.stringify(updateOrders)

        );


    };



    return(

        <OrderContext.Provider

            value={{

                orders,

                createOrder

            }}

        >

            {children}

        </OrderContext.Provider>

    );

}



export function useOrder(){

    return useContext(OrderContext);

}