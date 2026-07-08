export default function CouponCard({item}){

    return(

        <div className="coupon-card">


            <div className="coupon-icon">

                <img

                    src={item.icon}

                    alt=""

                />

            </div>



            <div className="coupon-content">


                <h3>

                    {item.title}

                </h3>


                <p>

                    {item.text}

                </p>


                <button>

                    Dùng ngay

                </button>


            </div>


        </div>

    );

}
