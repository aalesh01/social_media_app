import React from "react";

export const AuthContext = React.createContext();

const AuthContextBox = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    
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