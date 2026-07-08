import "./ProductList.css";

import products from "../../assets/data/products";

import ProductItem from "./ProductItem";


export default function ProductList(){


    return(

        <section className="product-section">


            <div className="container">


                <div className="product-box">


                    <div className="product-header">


                        <h2>

                            Sản phẩm nổi bật

                        </h2>



                        <button>

                            Xem tất cả →

                        </button>


                    </div>



                    <div className="product-grid">


                        {
                            products.map(item=>(

                                <ProductItem

                                    key={item.id}

                                    item={item}

                                />

                            ))
                        }


                    </div>


                </div>


            </div>


        </section>

    );

}
