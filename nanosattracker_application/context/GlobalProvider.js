import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from 'expo-router';
import { auth } from "../lib/firebaseConfig";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        setUser(user);
      } else {
        setIsLogged(false);
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLogged(false);
      setUser(null);
      router.replace("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <GlobalContext.Provider value={{ isLogged, setIsLogged, user, setUser, loading, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
