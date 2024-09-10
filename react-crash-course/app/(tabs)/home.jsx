import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const cubesatBackground = require('../../assets/images/cubesat_background.webp');
const startsBackground = require('../../assets/images/starts.jpg');
const floripasat2_img = require('../../assets/images/FloripaSat2.png');
const floripasat1_img = require('../../assets/images/FloripaSat1.png');


const Home = () => {
  const openGitHubLink = () => {
    Linking.openURL('https://github.com/spacelab-ufsc');
  };

  return (
    <SafeAreaView className="bg-primary">
      <ScrollView>
        <View>
          <ImageBackground source={cubesatBackground} className="h-60">
            <Text className=" ml-5 mt-5 text-3xl text-blue-100 font-bold">NanosatTracker</Text>
            <Text className=" ml-5 mt-2 text-blue-300 font-semibold">Spacelab- NanosatTracker</Text>
          </ImageBackground>
        </View>


        <View className="p-10">
          <Text className="text-2xl text-blue-500 font-bold">Overview</Text>
          <Text className="text-lg text-blue-300 font-semibold">SpaceLab brings together several research groups from the Federal University of Santa Catarina (UFSC), Brazil.
            The different groups conduct research and development activities in space systems in general,
            aiming to make space more accessible not only to the scientific community but also to the industry.
            Featured missions include FloripaSat-1, GOLDS-UFSC, GOMX-5, and cubesats from the Catarina Constelation.
            This organization combines repositories for different projects, files and documents.</Text>     

            <TouchableOpacity onPress={openGitHubLink}>
                <Text className="mt-2 mr-2 text-white text-center pt-2 pb-2 bg-black font-bold">GitHub</Text>
            </TouchableOpacity> 
        </View>

        <View className="p-5 mb-5">
          <Text className=" text-2xl text-blue-600 font-bold">FloripaSat-1</Text>
          <Text className=" mt-2 text-blue-500 font-bold">1U CubeSat</Text>

          <View className="flex-1 justify-center items-center m-5">
              <Image source={floripasat1_img}
              className="w-36 h-64" />     
          </View>

          <View className=" bg-secondary-700 p-2 rounded-xl">
            <Text className=" pl-2 text-lg mt-2 text-blue-300 font-semibold">FloripaSat-1 is a platform with five modules including core components for mission control and payloads,
            featuring an amateur radio repeater for global emergency and rescue communications.
            </Text>
          </View>
        </View>

        <View className="p-5 mb-5">
          <Text className=" text-2xl text-blue-600 font-bold">GOLDS-UFSC</Text>
          <Text className=" mt-2 text-blue-500 font-bold">2U CubeSat</Text>

          <View className="flex-1 justify-center items-center m-5">
              <Image source={floripasat2_img}
              className="w-36 h-64" />     
          </View>

          <View className=" bg-secondary-700 p-2 rounded-xl">
            <Text className=" pl-2 text-lg mt-2 text-blue-300 font-semibold">GOLDS-UFSC is a service module for INPE’s EDC payload, and also a platform for the test of core spacecraft
            technologies in a microgravity, high-radiation and low Earth orbit environment.
            </Text>
          </View>
        </View>

        <View className="p-5 mb-5">
          <Text className=" text-2xl text-blue-600 font-bold">Catarina A1</Text>
          <Text className=" mt-2 text-blue-500 font-bold">2U CubeSat</Text>

          <View className="flex-1 justify-center items-center m-5">
              <Image source={floripasat2_img}
              className="w-36 h-64" />     
          </View>

          <View className=" bg-secondary-700 p-2 rounded-xl">
            <Text className=" pl-2 text-lg mt-2 text-blue-300 font-semibold">The Catarina Constellation encompasses a set of satellites with the goal to provide services, mainly, to the civil defence, contributing to the country’s sustainable socioeconomic development agenda.
            </Text>
          </View>
        </View>

        <View className="p-5 mb-5">
          <Text className=" text-2xl text-blue-600 font-bold">Catarina A3</Text>
          <Text className=" mt-2 text-blue-500 font-bold">2U CubeSat</Text>

          <View className="flex-1 justify-center items-center m-5">
              <Image source={floripasat2_img}
              className="w-36 h-64" />     
          </View>

          <View className=" bg-secondary-700 p-2 rounded-xl">
            <Text className=" pl-2 text-lg mt-2 text-blue-300 font-semibold">The Catarina Constellation encompasses a set of satellites with the goal to provide services, mainly, to the civil defence, contributing to the country’s sustainable socioeconomic development agenda.
            </Text>
          </View>
        </View>
        

        

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home