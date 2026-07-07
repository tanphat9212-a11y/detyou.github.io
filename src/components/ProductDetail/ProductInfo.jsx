import {useCart} from "../../context/CartContext";
export default function ProductInfo({product}){


    return(

        <div className="product-info">


            <h1>

                {product.name}

            </h1>



            <div className="detail-price">

                {product.price.toLocaleString()}₫

            </div>



            <div className="detail-old">

                {product.oldPrice.toLocaleString()}₫

            </div>



            <p>

                {product.description}

            </p>



            <h3>

                Thông số kỹ thuật

            </h3>



            <ul>


                {
                    product.specs.map((item,index)=>(

                        <li key={index}>

                            {item}

                        </li>

                    ))
                }


            </ul>



            <button className="buy-button">

                Mua ngay

            </button>



<button 
className="cart-button"
onClick={()=>addToCart(product)}
>

     Thêm vào giỏ hàng

</button>


        </div>

    );

}


