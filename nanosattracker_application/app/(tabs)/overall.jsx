import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBox from '../../components/AnimatedBox';
const worldMap = require('../../assets/images/worldMap.png');

const Overall = () => {
  return (
    <SafeAreaView className="bg-black">
      <ScrollView>
        <View>
          <View>
            <Text className=" mt-10 pl-2 text-center text-3xl text-white font-bold">FloripaSat-1 mission extra data</Text>
          </View>
          
          <Text className=" text-center mt-20 text-blue-300 font-semibold">Ham Radio collaborators around the World!</Text>

          <View className="flex-1 justify-center items-center m-5">
            <Image source={worldMap} className="w-80 h-48" />     
          </View>

          <Text className=" text-center mt-5 text-blue-300 font-semibold">
            The Ham radio community plays a crucial part in ensuring the communication, control, and data collection aspects of CubeSat missions.
          </Text>
          <Text className=" text-center mt-10 text-blue-300 font-semibold">
            The Spacelab group thanks all Ham Radio operators who collaborated to the FloripaSat-1 mission.
          </Text>

          <View className=" justify-center mt-20 mb-10">
            <Text className=" text-center mt-5 text-blue-300 font-semibold">Ham Radio collaborators taht helped in the FloripaSat-1 Mission!</Text>
            <AnimatedBox />
          </View>
        </View>      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Overall;
