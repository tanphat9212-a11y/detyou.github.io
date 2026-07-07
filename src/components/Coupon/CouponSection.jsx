import "./Coupon.css";

import coupons from "../../assets/data/coupons";

import CouponCard from "./CouponCard";


export default function CouponSection(){


    return(

        <section className="coupon-section">


            <div className="container">


                <div className="coupon-box">


                    <h2>

                        Ưu đãi dành cho bạn

                    </h2>



                    <div className="coupon-grid">


                        {
                            coupons.map(item=>(

                                <CouponCard

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