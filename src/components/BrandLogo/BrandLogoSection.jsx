import "./BrandLogo.css";

import brands from "../../assets/data/brands";

import BrandLogoItem from "./BrandLogoItem";


export default function BrandLogoSection(){


    return(

        <section className="brand-logo-section">


            <div className="container">


                <div className="brand-logo-box">


                    <h2>

                        Thương hiệu nổi bật

                    </h2>



                    <div className="brand-logo-grid">


                        {
                            brands.map(item=>(

                                <BrandLogoItem

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