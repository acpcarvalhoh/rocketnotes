import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData ] = useState({});
    


    async function signIn({email, password}){
        try{
            const response =  await api.post("/sessions", { email, password })

            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)


            setData({user, token})

        } catch(error){
            if(error.response){
                alert(error.response.data.message)

            }else{
                alert("Não foi possível entrar!!!")
            };
        };
        


    };


    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        if(user && token){
            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            });
        };


    }, []);



    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
    
};

function userAuth(){
    const context = useContext(AuthContext);

    return context;
};


export { AuthProvider, userAuth };
