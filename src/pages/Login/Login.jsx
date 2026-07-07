import {
    useState
}
from "react";


import {

    useNavigate

}
from "react-router-dom";


import {

    useAuth

}
from "../../context/AuthContext";


import "./Login.css";



export default function Login(){


    const navigate=useNavigate();


    const {login}=useAuth();



    const [form,setForm]=useState({

        name:"",

        email:""

    });



    function handleSubmit(e){


        e.preventDefault();



        login(form);



        navigate("/");


    }



    return(

        <section className="login-page">


            <div className="login-box">


                <h1>

                    Đăng nhập

                </h1>



                <form onSubmit={handleSubmit}>


                    <input

                        type="text"

                        placeholder="Họ tên"

                        value={form.name}

                        onChange={e=>

                            setForm({

                                ...form,

                                name:e.target.value

                            })

                        }

                    />



                    <input

                        type="email"

                        placeholder="Email"

                        value={form.email}

                        onChange={e=>

                            setForm({

                                ...form,

                                email:e.target.value

                            })

                        }

                    />



                    <button>

                        Đăng nhập

                    </button>


                </form>


            </div>


        </section>

    );

}