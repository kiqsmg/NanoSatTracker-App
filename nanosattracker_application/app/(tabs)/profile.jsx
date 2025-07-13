import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '../../context/GlobalProvider.js';

const profile = require('../../assets/images/profile.jpg');

const Profile = () => {
  const { user, logout } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="flex-1 px-6 py-8">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-3xl font-pbold text-white text-center mb-2">
            NanoSatTracker
          </Text>
          <Text className="text-lg font-pmedium text-secondary text-center">
            Spacelab - NanoSatTracker
          </Text>
        </View>

        {/* Profile Section */}
        <View className="flex-1 justify-center items-center">
          <View className="items-center mb-8">
            <Image 
              source={profile}
              className="w-32 h-32 rounded-full mb-6"
            />
            <Text className="text-2xl font-pbold text-white text-center mb-2">
              {user?.email || "Email not available"}
            </Text>
            <Text className="text-base font-pregular text-gray-100 text-center">
              Welcome to NanoSatTracker
            </Text>
          </View>
        </View>

        {/* Logout Button */}
        <View className="mt-8">
          <TouchableOpacity 
            onPress={logout} 
            className="bg-red-500 rounded-xl py-4 px-6"
          >
            <Text className="text-white text-lg font-psemibold text-center">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;