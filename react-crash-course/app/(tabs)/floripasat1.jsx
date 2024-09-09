import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const cubesatBackground = require('../../assets/images/cubesat_background.webp'); // Adjust the path as needed


const FloripaSat1 = () => {
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView>
        <View>
          <ImageBackground source={cubesatBackground} resizeMode="cover">
            <Text className="text-xl text-blue-500 font-bold">Spacelab- NanosatTracker</Text>
            <Text className="text-blue-300 font-semibold">Spacelab- NanosatTracker</Text>

            <TouchableOpacity onPress={() => { /* Handle GitHub link */ }}>
              <Text >GitHub</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>


        <View>
          <Text className="text-xl text-blue-500 font-bold">Overview</Text>
          <Text className="text-blue-300 font-semibold">SpaceLab brings together several research groups from the Federal University of Santa Catarina (UFSC), Brazil.
            The different groups conduct research and development activities in space systems in general,
            aiming to make space more accessible not only to the scientific community but also to the industry.
            Featured missions include FloripaSat-1, GOLDS-UFSC, GOMX-5, and cubesats from the Catarina Constelation.
            This organization combines repositories for different projects, files and documents.</Text>      
        </View>

        

      </ScrollView>
    </SafeAreaView>
  )
}

export default FloripaSat1