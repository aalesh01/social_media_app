import React from "react";

export const AuthContext = React.createContext();

const AuthContextBox = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    
    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    return (
        <AuthContext.Provider value={{isAuth,toggleAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextBox;