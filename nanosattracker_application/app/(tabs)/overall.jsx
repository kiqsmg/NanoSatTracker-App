import { View, Text, Image, ScrollView } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
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

        <View style={{ flex: 1 }}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 1000 500"
            // The viewBox will depend on the SVG file's dimensions
          >
            {/* Example of SVG path for the world map */}
            <Path
              d="M982.9,228.3c0-1.7,0-3.4,0-5.1..."
              fill="#CCCCCC"
              stroke="#000000"
              strokeWidth="1"
            />
            
            {/* Example of a pin for a specific location, like Brazil */}
            <Circle cx="450" cy="350" r="5" fill="red" />
            
            {/* Another pin for a different country */}
            <Circle cx="700" cy="200" r="5" fill="blue" />
          </Svg>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Overall