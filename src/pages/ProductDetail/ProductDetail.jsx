import {useParams} from "react-router-dom";

import products from "../../assets/data/products";

import ProductGallery from "../../components/ProductDetail/ProductGallery";

import ProductInfo from "../../components/ProductDetail/ProductInfo";

import "./ProductDetail.css";


export default function ProductDetail(){


    const {id}=useParams();



    const product = products.find(

        item=>item.id===Number(id)

    );



    if(!product){

        return(

            <h2>

                Không tìm thấy sản phẩm

            </h2>

        );

    }



    return(

        <section className="detail-page">


            <div className="container">


                <div className="detail-layout">


                    <ProductGallery

                        product={product}

                    />



                    <ProductInfo

                        product={product}

                    />


                </div>


            </div>


        </section>

    );

}