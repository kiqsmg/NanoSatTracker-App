import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';
import {images} from '../constants';

import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

import { firebaseConfig } from '../lib/fireabaseConfig.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the auth object for use in other files

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85px] px-4">
          <Image 
            source={images.logoSmall}
            className="w-[200px] h-[300px] mt-5 "
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-2xl text-secondary-400 font-bold text-center">
              <Text className="text-4xl text-white">NanoSatTracker</Text>{"\n"}
              Making Satellite Data Accessible
            </Text>

          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Satellites and Data Converge: Understand Space Data Like Never Before with NanoSatTrack.
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}