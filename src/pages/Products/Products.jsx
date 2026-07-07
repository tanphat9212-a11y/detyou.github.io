import "./Products.css";

import products from "../../assets/data/products";

import ProductItem from "../../components/ProductList/ProductItem";

import FilterBox from "../../components/Filter/FilterBox";


export default function Products(){


    return(

        <section className="products-page">


            <div className="container">


                <h1>

                    Điện thoại, laptop và phụ kiện

                </h1>



                <div className="products-layout">


                    <aside>


                        <FilterBox />


                    </aside>



                    <main>


                        <div className="products-count">


                            Có {products.length} sản phẩm


                        </div>



                        <div className="products-list-grid">


                            {
                                products.map(item=>(

                                    <ProductItem

                                        key={item.id}

                                        item={item}

                                    />

                                ))
                            }


                        </div>


                    </main>


                </div>


            </div>


        </section>

    );

}