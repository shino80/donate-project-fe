import { createContext, useState,useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
   
   
    return (
        <AppContext.Provider value={{ auth, setAuth }}>
            {children}
        </AppContext.Provider>
    )
    };
    export const useGlobalContext = () => {
        return useContext(AppContext)
}

export { AppContext, AppProvider };