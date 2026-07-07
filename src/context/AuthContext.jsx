import {
    createContext,
    useContext,
    useState
}
from "react";


const AuthContext = createContext();



export function AuthProvider({children}){


    const [user,setUser] = useState(

        JSON.parse(

            localStorage.getItem("user")

        )

        ||

        null

    );



    const login=(data)=>{


        const account={

            name:data.name,

            email:data.email

        };


        setUser(account);


        localStorage.setItem(

            "user",

            JSON.stringify(account)

        );


    };



    const logout=()=>{


        setUser(null);


        localStorage.removeItem("user");


    };



    return(

        <AuthContext.Provider

            value={{

                user,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}



export function useAuth(){

    return useContext(AuthContext);

}