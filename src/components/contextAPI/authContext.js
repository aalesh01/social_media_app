import React, { useEffect } from "react";

export const AuthContext = React.createContext();

const AuthContextBox = ({ children }) => {

    
    
    if(localStorage.getItem("auth")==undefined) localStorage.setItem("auth",false);
    const [isAuth, setIsAuth] = React.useState(localStorage.getItem("auth"));

    useEffect(()=>{
        localStorage.setItem("auth",isAuth);
    },[isAuth])
    
    const toggleAuth = (flag) => {
        setIsAuth(flag);
    }

    return (
        <AuthContext.Provider value={{isAuth,toggleAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextBox;