import {

    useSearchParams

}
from "react-router-dom";


import products from "../../assets/data/products";

import ProductItem from "../../components/ProductList/ProductItem";

import "./Search.css";



export default function Search(){


    const [params]=useSearchParams();


    const keyword=params.get("keyword") || "";



    const result=products.filter(item=>

        item.name

        .toLowerCase()

        .includes(

            keyword.toLowerCase()

        )

    );



    return(

        <section className="search-page">


            <div className="container">


                <h1>

                    Kết quả tìm kiếm:

                    <span>

                        {keyword}

                    </span>

                </h1>



                <div className="search-grid">


                    {
                        result.length

                        ?

                        result.map(item=>(

                            <ProductItem

                                key={item.id}

                                item={item}

                            />

                        ))

                        :

                        <p>

                            Không tìm thấy sản phẩm

                        </p>

                    }


                </div>


            </div>


        </section>

    );

}