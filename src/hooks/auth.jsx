import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData ] = useState({});
    


    async function signIn({email, password}){
        try{
            const response =  await api.post("/sessions", { email, password })

            const { user, token } = response.data;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

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

    function signOut(){
       localStorage.removeItem("@rocketnotes:user");
       localStorage.removeItem("@rocketnotes:token");

       setData({});

    };

    async function updateProfile({user, avatarFile}){ 
        try{

            if(avatarFile){ // se existe um arquivo selecionado
                const fileUploadForm = new FormData();

                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);

                user.avatar = response.data.avatar;
            }
        
            const response = await api.put("/users", {user})

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

            setData({user, token: data.token})

            alert("Dados atualizados!!!")

            
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
                
            }else{
                alert("Não foi possível atualizar o perfil")
               
            }
        };
    };


    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        if(user && token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            });
        };


    }, []);



    return(
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            updateProfile,
            user: data.user
            
            }}
        >
            {children}
        </AuthContext.Provider>
    );
    
};

function userAuth(){
    const context = useContext(AuthContext);

    return context;
};


export { AuthProvider, userAuth };
