import {

    useAuth

}
from "../../context/AuthContext";


import {

    Link

}
from "react-router-dom";


import "./Account.css";



export default function Account(){


    const {

        user,

        logout

    }=useAuth();



    if(!user){


        return(

            <section className="account-page">


                <div className="account-box">


                    <h2>

                        Bạn chưa đăng nhập

                    </h2>


                    <Link

                    to="/login"

                    >

                        Đăng nhập

                    </Link>


                </div>


            </section>

        );


    }



    return(

        <section className="account-page">


            <div className="account-box">


                <h1>

                    Tài khoản

                </h1>



                <div className="account-info">


                    <p>

                        Họ tên:

                        <b>

                        {user.name}

                        </b>

                    </p>



                    <p>

                        Email:

                        <b>

                        {user.email}

                        </b>

                    </p>


                </div>



                <Link

                className="account-link"

                to="/orders"

                >

                    Xem lịch sử mua hàng

                </Link>




                <button

                className="logout-btn"

                onClick={logout}

                >

                    Đăng xuất

                </button>


            </div>


        </section>

    );

}