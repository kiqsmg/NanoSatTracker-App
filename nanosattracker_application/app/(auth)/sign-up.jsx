import { useState } from 'react';
import { View, Text, ScrollView, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

import { createUserWithEmailAndPassword } from '@firebase/auth'; // Import the correct function
import { auth } from '../../lib/fireabaseConfig.js';


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

    setIsSubmitting(true);
    try {
      // Firebase sign-up (create user)
      const userCredential = await createUserWithEmailAndPassword( auth, form.email, form.password );
      const user = userCredential.user;
      console.log('User created:', user);

      // Navigate to home page after successful sign-up
      router.replace("/home");
    } catch (error) {
      Alert.alert("O código tá parando aqui!!!!");
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* KeyboardAvoidingView to handle keyboard push-up */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 1 : 0}
      >
        <ScrollView>
          <View className="w-full justify-center min-h-[65vh] px-4 my-6">
          <Image 
              source={images.logo}
              resizeMode="contain"
              className="w-[250px] h-[50px]"
            />
            <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
              Sign up to NanosatTracker
            </Text>
            <FormField 
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-10"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField 
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />
            <CustomButton 
              title="Sign up"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold text-secondary"
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