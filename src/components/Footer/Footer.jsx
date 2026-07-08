import "./Footer.css";

import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaInstagram
} from "react-icons/fa";


export default function Footer(){

    return(

        <footer className="footer">


            <div className="container">


                <div className="footer-grid">


                    <div className="footer-column">


                        <h3>
                            Tổng đài hỗ trợ
                        </h3>


                        <p>
                            Gọi mua hàng:
                            <b> 1800.1060</b>
                        </p>


                        <p>
                            Khiếu nại:
                            <b> 1800.1062</b>
                        </p>


                        <p>
                            Bảo hành:
                            <b> 1800.1064</b>
                        </p>


                    </div>




                    <div className="footer-column">


                        <h3>
                            Về công ty
                        </h3>


                        <ul>

                            <li>
                                Giới thiệu công ty
                            </li>

                            <li>
                                Tuyển dụng
                            </li>

                            <li>
                                Chính sách bảo mật
                            </li>

                            <li>
                                Điều khoản sử dụng
                            </li>

                        </ul>


                    </div>




                    <div className="footer-column">


                        <h3>
                            Thông tin khác
                        </h3>


                        <ul>

                            <li>
                                Tin công nghệ
                            </li>

                            <li>
                                Khuyến mãi
                            </li>

                            <li>
                                Hướng dẫn mua hàng
                            </li>

                            <li>
                                Câu hỏi thường gặp
                            </li>


                        </ul>


                    </div>




                    <div className="footer-column">


                        <h3>
                            Kết nối
                        </h3>


                        <div className="social">


                            <FaFacebook />


                            <FaYoutube />


                            <FaTiktok />


                            <FaInstagram />


                        </div>


                    </div>



                </div>




                <div className="footer-bottom">


                    © 2026 TGDD Clone - Website mô phỏng


                </div>



            </div>


        </footer>

    );

}
