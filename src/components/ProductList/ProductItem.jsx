export default function ProductItem({item}){


    return(

        <div className="product-item">


            <span className="product-tag">

                {item.tag}

            </span>



            <div className="product-image">


                <img

                    src={item.image}

                    alt={item.name}

                />


            </div>



            <h3>

                {item.name}

            </h3>



            <div className="product-price">

                {item.price.toLocaleString()}₫

            </div>



            <div className="product-old">

                {item.oldPrice.toLocaleString()}₫

            </div>



            <div className="product-rating">

                ★★★★★

            </div>


            <button>

                Thêm vào giỏ

            </button>


        </div>

    );

}