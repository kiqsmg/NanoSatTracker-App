import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useGlobalContext } from '../../context/GlobalProvider';

const TestFirebase = () => {
  const { user, loading } = useGlobalContext();
  const [authState, setAuthState] = useState('Checking...');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthState(`Logged in as: ${user.email}`);
      } else {
        setAuthState('Not logged in');
      }
    });

    return unsubscribe;
  }, []);

  const testSignIn = async () => {
    try {
      // Test with a dummy account (you'll need to create this in Firebase Console)
      await auth().signInWithEmailAndPassword('test@example.com', 'password123');
      Alert.alert('Success', 'Test sign in successful!');
    } catch (error) {
      Alert.alert('Error', `Test sign in failed: ${error.message}`);
    }
  };

  const testSignOut = async () => {
    try {
      await auth().signOut();
      Alert.alert('Success', 'Test sign out successful!');
    } catch (error) {
      Alert.alert('Error', `Test sign out failed: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Firebase Test</Text>
        <Text style={styles.status}>Auth State: {authState}</Text>
        <Text style={styles.status}>Global Context User: {user ? user.email : 'None'}</Text>
        <Text style={styles.status}>Loading: {loading ? 'Yes' : 'No'}</Text>
        
        <TouchableOpacity style={styles.button} onPress={testSignIn}>
          <Text style={styles.buttonText}>Test Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={testSignOut}>
          <Text style={styles.buttonText}>Test Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TestFirebase;
