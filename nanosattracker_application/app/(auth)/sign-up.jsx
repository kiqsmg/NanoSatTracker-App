import { useState } from 'react';
import { View, Text, ScrollView, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../lib/firebaseConfig.js';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
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
      // Firebase sign-up (create user)
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      console.log('User created:', user);

      // Navigate to home page after successful sign-up
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
                Create Account
              </Text>
              <Text className="text-lg font-pregular text-gray-100 text-center">
                Sign up to NanoSatTracker
              </Text>
            </View>

            {/* Form Section */}
            <View className="space-y-6">
              <FormField 
                title="Username"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                placeholder="Enter your username"
                autoCapitalize="words"
                autoCorrect={false}
              />
              
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
                title="Sign Up"
                handlePress={submit}
                containerStyles="w-full"
                isLoading={isSubmitting}
              />
            </View>

            {/* Sign In Link */}
            <View className="flex-row justify-center items-center mt-8 pt-4">
              <Text className="text-base font-pregular text-gray-100">
                Have an account already?{' '}
              </Text>
              <Link
                href="/(auth)/sign-in"
                className="text-base font-psemibold text-secondary"
              >
                Login
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
