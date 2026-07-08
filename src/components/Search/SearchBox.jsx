import {useState} from "react";

import {
    useNavigate
}
from "react-router-dom";

import "./Search.css";


export default function SearchBox(){


    const [keyword,setKeyword]=useState("");

    const navigate=useNavigate();



    function handleSearch(e){


        e.preventDefault();


        if(keyword.trim()){


            navigate(

                `/search?keyword=${keyword}`

            );


        }


    }



    return(

        <form

            className="search-box"

            onSubmit={handleSearch}

        >


            <input

                type="text"

                placeholder="Bạn cần tìm gì?"

                value={keyword}

                onChange={e=>setKeyword(e.target.value)}

            />



            <button>

                🔍

            </button>


        </form>

    );

}
