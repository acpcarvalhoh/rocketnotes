import { BrowserRouter } from "react-router-dom";

import { userAuth } from "../hooks/auth";


import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    const { user } = userAuth();

    return(
        <BrowserRouter>
           {user? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    );
};