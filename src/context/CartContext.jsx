import {

    createContext,

    useContext,

    useState

}
from "react";



const CartContext=createContext();



export function CartProvider({children}){


    const [cart,setCart]=useState(


        JSON.parse(

            localStorage.getItem("cart")

        )

        ||

        []

    );




    function saveCart(data){


        setCart(data);


        localStorage.setItem(

            "cart",

            JSON.stringify(data)

        );


    }




    const addToCart=(product)=>{


        const exist=cart.find(

            item=>item.id===product.id

        );



        let newCart;



        if(exist){


            newCart=cart.map(item=>


                item.id===product.id

                ?

                {

                    ...item,

                    quantity:item.quantity+1

                }

                :

                item


            );



        }else{


            newCart=[

                ...cart,

                {

                    ...product,

                    quantity:1

                }

            ];


        }



        saveCart(newCart);


    };





    const removeCart=(id)=>{


        const newCart=cart.filter(

            item=>item.id!==id

        );


        saveCart(newCart);


    };





    const updateQuantity=(id,type)=>{


        const newCart=cart.map(item=>{


            if(item.id===id){



                let quantity=item.quantity;



                if(type==="plus"){

                    quantity++;

                }



                if(type==="minus" && quantity>1){

                    quantity--;

                }



                return{

                    ...item,

                    quantity

                };


            }



            return item;


        });



        saveCart(newCart);


    };





    return(

        <CartContext.Provider


            value={{

                cart,

                addToCart,

                removeCart,

                updateQuantity

            }}


        >


            {children}


        </CartContext.Provider>

    );

}



export function useCart(){

    return useContext(CartContext);

}