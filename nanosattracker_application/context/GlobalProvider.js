import React, { createContext, useContext, useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(null);
  };

  const logout = async () => {
    try {
      const { getAuthInstance } = await import('../lib/firebaseConfig');
      const auth = await getAuthInstance();
      await auth.signOut();
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
