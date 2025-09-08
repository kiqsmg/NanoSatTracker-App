import React, { createContext, useContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((currentUser) => {
      console.log('Auth state changed:', currentUser ? 'User logged in' : 'User logged out');
      
      setUser(currentUser);
      
      if (currentUser) {
        setUserInfo({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUserInfo(null);
      }
      
      setLoading(false);
    });

    return unsubscribe; // Unsubscribe on unmount
  }, []);

  const clearError = () => {
    setError(null);
  };

  const logout = async () => {
    try {
      await auth().signOut();
      setUser(null);
      setUserInfo(null);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      setError(error.message);
    }
  };

  const value = {
    user,
    userInfo,
    loading,
    error,
    clearError,
    logout,
    setUser,
    setUserInfo,
    setLoading,
    setError,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
