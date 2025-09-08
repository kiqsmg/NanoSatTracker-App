// hooks/useAuth.js
import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { getAuthErrorMessage, validateEmail, validatePassword, validateUsername } from '../lib/firebaseConfig';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const signIn = async (email, password) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (!validateEmail(email)) {
      throw new Error('Please enter a valid email address');
    }

    if (!validatePassword(password)) {
      throw new Error('Password must be at least 6 characters long');
    }

    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (username, email, password, confirmPassword) => {
    // Validate all fields
    if (!username || !email || !password || !confirmPassword) {
      throw new Error('All fields are required');
    }

    if (!validateUsername(username)) {
      throw new Error('Username must be between 3 and 20 characters');
    }

    if (!validateEmail(email)) {
      throw new Error('Please enter a valid email address');
    }

    if (!validatePassword(password)) {
      throw new Error('Password must be at least 6 characters long');
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await auth().signOut();
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (error, title = 'Authentication Error') => {
    console.error(`${title}:`, error);
    Alert.alert(title, error.message);
  };

  return {
    signIn,
    signUp,
    logout,
    loading,
    handleAuthError
  };
};