import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



const Overall = () => {

  return (
    <SafeAreaView className="bg-black">
      <ScrollView>
        <View>
          <Text className=" mt-10 pl-2 text-center text-3xl text-white font-bold">FloripaSat-1 mission extra data</Text>
        </View>
        
        <Text className=" ml-5 mt-2 text-blue-300 font-semibold">Ham Radio collaborators around the World!</Text>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Overall