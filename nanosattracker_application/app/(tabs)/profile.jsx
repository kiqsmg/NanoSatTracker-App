import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '../../context/GlobalProvider.js';

const profile = require('../../assets/images/profile.jpg');


const Profile = () => {
  const { user, logout } = useGlobalContext();

  return (
    <SafeAreaView className="bg-black h-full">
      <View className="mt-10">
        <Text className=" ml-5 text-3xl text-blue-100 font-bold text-center">NanosatTracker</Text>
        <Text className=" ml-5 mt-2 text-blue-300 font-semibold text-center">Spacelab- NanosatTracker</Text>
      </View>
      <View className="p-5 mb-5 mt-20">
        <View className="flex-1 justify-center items-center m-5 mt-10 mb-10">
          <Image source={profile}
            className="w-36 h-36 rounded-full" />  
        </View>
        <View className="mt-10">
          <Text className=" text-2xl text-blue-600 font-bold text-center">{user?.email || "Email not available"}</Text>
        </View>
      </View>
      <View className="p-5 mb-5 mt-10">
        <TouchableOpacity onPress={logout} className="bg-red-500 p-2 rounded-xl">
          <Text className="text-white text-lg font-bold text-center">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile