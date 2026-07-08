import "./Floating.css";

import {
    FaPhone,
    FaFacebookMessenger,
    FaComments
} from "react-icons/fa";


export default function FloatingContact(){


    return(

        <div className="floating-contact">


            <a
                href="#"
                className="floating-item phone"
            >

                <FaPhone />

                <span>
                    Gọi ngay
                </span>

            </a>



            <a
                href="#"
                className="floating-item messenger"
            >

                <FaFacebookMessenger />

                <span>
                    Messenger
                </span>

            </a>



            <a
                href="#"
                className="floating-item chat"
            >

                <FaComments />

                <span>
                    Chat
                </span>

            </a>


        </div>

    );

}
