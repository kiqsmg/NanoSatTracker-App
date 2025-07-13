import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Alert, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../lib/firebaseConfig.js';

import { useGlobalContext } from '../../context/GlobalProvider.js'

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { isLogged, setIsLogged, setUser } = useGlobalContext();

  // Redirect to home if user is already logged-in
  useEffect(() => {
    if (isLogged) {
      router.replace('/(tabs)/home');
    }
  }, [isLogged]);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Check if Firebase auth is available
    if (!auth) {
      Alert.alert("Error", "Authentication service is not available. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Firebase sign-in
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      console.log('User signed in:', user);

      // Update global state with the user's data
      setUser(user);
      setIsLogged(true);

      // Navigate to home page after successful sign-in
      router.replace("/(tabs)/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView 
          contentContainerStyle={{ 
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 40
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-center">
            {/* Logo Section */}
            <View className="items-center mb-8">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-64 h-16 mb-6"
              />
            </View>

            {/* Title Section */}
            <View className="items-center mb-8">
              <Text className="text-3xl font-pbold text-white text-center mb-2">
                Welcome Back
              </Text>
              <Text className="text-lg font-pregular text-gray-100 text-center">
                Log in to NanoSatTracker
              </Text>
            </View>

            {/* Form Section */}
            <View className="space-y-6">
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                placeholder="Enter your password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Button Section */}
            <View className="mt-8">
              <CustomButton
                title="Sign In"
                handlePress={submit}
                containerStyles="w-full"
                isLoading={isSubmitting}
              />
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center items-center mt-8 pt-4">
              <Text className="text-base font-pregular text-gray-100">
                Don't have an account?{' '}
              </Text>
              <Link
                href="/(auth)/sign-up"
                className="text-base font-psemibold text-secondary"
              >
                Sign up
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
