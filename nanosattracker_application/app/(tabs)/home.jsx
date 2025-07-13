import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const cubesatBackground = require('../../assets/images/cubesat_background.webp');
const floripasat2_img = require('../../assets/images/FloripaSat2.png');
const floripasat1_img = require('../../assets/images/FloripaSat1.png');

const Home = () => {
  const openGitHubLink = () => {
    Linking.openURL('https://github.com/spacelab-ufsc');
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="relative">
          <ImageBackground 
            source={cubesatBackground} 
            className="h-64"
            resizeMode="cover"
          >
            <View className="flex-1 justify-end pb-8 px-6">
              <Text className="text-4xl font-pbold text-white mb-2">
                NanoSatTracker
              </Text>
              <Text className="text-lg font-pmedium text-secondary">
                Spacelab - NanoSatTracker
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* Overview Section */}
        <View className="px-6 py-8">
          <Text className="text-2xl font-pbold text-white mb-4">Overview</Text>
          <Text className="text-base font-pregular text-gray-100 leading-6 mb-6">
            SpaceLab brings together several research groups from the Federal University of Santa Catarina (UFSC), Brazil. The different groups conduct research and development activities in space systems in general, aiming to make space more accessible not only to the scientific community but also to the industry. Featured missions include FloripaSat-1, GOLDS-UFSC, GOMX-5, and cubesats from the Catarina Constellation. This organization combines repositories for different projects, files and documents.
          </Text>
          
          <TouchableOpacity 
            onPress={openGitHubLink}
            className="bg-white rounded-xl py-3 px-6 self-start"
          >
            <Text className="text-black font-psemibold text-base">GitHub</Text>
          </TouchableOpacity>
        </View>

        {/* Satellite Cards */}
        <View className="px-6 pb-8">
          {/* FloripaSat-1 */}
          <View className="bg-black-100 rounded-2xl p-6 mb-6">
            <Text className="text-2xl font-pbold text-white mb-2">FloripaSat-1</Text>
            <Text className="text-base font-pmedium text-secondary mb-4">1U CubeSat</Text>
            
            <View className="items-center mb-4">
              <Image 
                source={floripasat1_img}
                className="w-32 h-48"
                resizeMode="contain"
              />
            </View>
            
            <View className="bg-secondary-600 rounded-xl p-4">
              <Text className="text-base font-pregular text-white leading-6">
                FloripaSat-1 is a platform with five modules including core components for mission control and payloads, featuring an amateur radio repeater for global emergency and rescue communications.
              </Text>
            </View>
          </View>

          {/* GOLDS-UFSC */}
          <View className="bg-black-100 rounded-2xl p-6 mb-6">
            <Text className="text-2xl font-pbold text-white mb-2">GOLDS-UFSC</Text>
            <Text className="text-base font-pmedium text-secondary mb-4">2U CubeSat</Text>
            
            <View className="items-center mb-4">
              <Image 
                source={floripasat2_img}
                className="w-32 h-48"
                resizeMode="contain"
              />
            </View>
            
            <View className="bg-secondary-600 rounded-xl p-4">
              <Text className="text-base font-pregular text-white leading-6">
                GOLDS-UFSC is a service module for INPE's EDC payload, and also a platform for the test of core spacecraft technologies in a microgravity, high-radiation and low Earth orbit environment.
              </Text>
            </View>
          </View>

          {/* Catarina A1 */}
          <View className="bg-black-100 rounded-2xl p-6 mb-6">
            <Text className="text-2xl font-pbold text-white mb-2">Catarina A1</Text>
            <Text className="text-base font-pmedium text-secondary mb-4">2U CubeSat</Text>
            
            <View className="items-center mb-4">
              <Image 
                source={floripasat2_img}
                className="w-32 h-48"
                resizeMode="contain"
              />
            </View>
            
            <View className="bg-secondary-600 rounded-xl p-4">
              <Text className="text-base font-pregular text-white leading-6">
                The Catarina Constellation encompasses a set of satellites with the goal to provide services, mainly, to the civil defence, contributing to the country's sustainable socioeconomic development agenda.
              </Text>
            </View>
          </View>

          {/* Catarina A3 */}
          <View className="bg-black-100 rounded-2xl p-6">
            <Text className="text-2xl font-pbold text-white mb-2">Catarina A3</Text>
            <Text className="text-base font-pmedium text-secondary mb-4">2U CubeSat</Text>
            
            <View className="items-center mb-4">
              <Image 
                source={floripasat2_img}
                className="w-32 h-48"
                resizeMode="contain"
              />
            </View>
            
            <View className="bg-secondary-600 rounded-xl p-4">
              <Text className="text-base font-pregular text-white leading-6">
                The Catarina Constellation encompasses a set of satellites with the goal to provide services, mainly, to the civil defence, contributing to the country's sustainable socioeconomic development agenda.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;