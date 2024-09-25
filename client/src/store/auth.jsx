import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const Base_URL = import.meta.env.VITE_FRONTEND_BASE_URL;
    const [token,setToken] = useState(localStorage.getItem('token'));
    const [user,setUser] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [services,setServices] = useState("");
    const authToken = `Bearer ${token}`
    const storeTokeninLS = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem('token',serverToken)
    }

    let isLoggedIn = !! token;
    // console.log(isLoggedIn)  !! if true then true and if false then false
    // tackling the logout functionality
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token')
    }

    // JWT Authentication --> get currently logged in user data

    const userAuthentication = async()=>{
        try {
            setIsLoading(true);
            const response = await fetch(`${Base_URL}/api/auth/loggeduser`,{
                method:"GET",
                headers:{
                    Authorization:authToken
                },
            });
            if(response.ok){
                const data = await response.json();
                // console.log("RESPONSE",data.data)
                setUser(data.data);
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data")
        }
    }
    // to fetch all services
    const getServices = async()=>{
        try {
            const response = await fetch(`${Base_URL}/api/servicedata/services`,{
                method:"GET",
            });
            if(response.ok){
                const services = await response.json();
                // console.log(services.service);
                // so after getting the data from server we will use state variable to pass on element
                setServices(services.service);
            }
        } catch (error) {
            console.log("Service",error);
        }
    }
    useEffect(()=>{
        getServices();
        userAuthentication();
    },[])

        return (
        <AuthContext.Provider value={{isLoggedIn,storeTokeninLS,LogoutUser,user,services,authToken,isLoading}}>
            {children}
        </AuthContext.Provider>
        );
}
// children is used to wrap AuthProvider to main.jsx

// make custom hook must use
// this is consumer and this will have all thing
export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside the provider");
    }
    return authContextValue;
}