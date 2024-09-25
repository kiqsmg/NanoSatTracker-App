import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGlobalContext } from '../../context/GlobalProvider.js';

const cubesatBackground = require('../../assets/images/cubesat_background.webp');
const profile = require('../../assets/images/profile.jpg');


const Profile = () => {

  const { logout } = useGlobalContext();


  return (
    <SafeAreaView className="bg-black">
      <ScrollView>
        <View>
          <Text className=" ml-5 mt-5 text-3xl text-blue-100 font-bold text-center">NanosatTracker</Text>
          <Text className=" ml-5 mt-2 text-blue-300 font-semibold text-center">Spacelab- NanosatTracker</Text>
        </View>

        <View className="p-5 mb-5 mt-10">
          <View className="flex-1 justify-center items-center m-5 mt-10">
              <Image source={profile}
              className="w-36 h-36 rounded-full" />     
          </View>

          <Text className=" text-2xl text-blue-600 font-bold text-center">Username</Text>
          <Text className=" text-2xl text-blue-600 font-bold text-center">Email</Text>
        </View>

        <View className="p-5 mb-5 mt-10">
          <TouchableOpacity onPress={logout} className="bg-red-500 p-2 rounded-xl">
            <Text className="text-white text-lg font-bold text-center">Logout</Text>
          </TouchableOpacity>
        </View>        

      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile