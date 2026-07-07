import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackTop(){

    const [show,setShow] = useState(false);


    useEffect(()=>{

        const handleScroll = ()=>{

            if(window.scrollY > 500){

                setShow(true);

            }else{

                setShow(false);

            }

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return ()=>{

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    },[]);



    const scrollTop = ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };


    if(!show){

        return null;

    }


    return(

        <button
            className="back-top"
            onClick={scrollTop}
        >

            <FaArrowUp />

        </button>

    );

}