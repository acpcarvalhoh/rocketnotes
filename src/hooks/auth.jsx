import { createContext, useContext } from "react";

export const AuthContext = createContext({});

import { api } from "../services/api"

function AuthProvider({children}){

    async function SignIn({email, password}){
        try{
            const response = await api.post("/sessions", {email, password})

            console.log(response);
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Erro ao fazer login!")
            }
        };
    };


    return(
        <AuthContext.Provider value={{SignIn}}>
            {children}
        </AuthContext.Provider>   
    );
};

function userAuth(){
    const context = useContext(AuthContext)

    return context;
};


export { AuthProvider, userAuth };