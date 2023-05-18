import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import {onAuthStateChanged} from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState({});

    
    useEffect(()=>{
      const unsub =  onAuthStateChanged(firebaseAuth,(user)=>{
            setCurrentUser(user)
            
        })

        //clean function
        return ()=> {
            unsub();
        }
    },[]);

    return (

    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );

};