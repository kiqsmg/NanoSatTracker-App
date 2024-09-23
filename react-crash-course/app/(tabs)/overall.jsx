import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const floripasat1_img = require('../../assets/images/FloripaSat1.png');
const eps_img = require('../../assets/images/eps_img.png');
const obdh_img = require('../../assets/images/obdh_img.png');
const ttc_img = require('../../assets/images/ttc_img.png');



const Overall = () => {

  return (
    <SafeAreaView className="bg-black">
      <ScrollView>
      <Text className=" mt-10 pl-2 text-center text-3xl text-white font-bold">FloripaSat-1 mission</Text>
        <View className="flex-1 justify-center items-center m-5">
          <Image source={floripasat1_img}
          className="w-40 h-80" />     
        </View>
        <View>
          <View className=" m-5 bg-secondary-700 p-2 rounded-xl">
            <Text className=" pl-2 text-lg text-blue-300 font-semibold">FloripaSat-1 is a technology demonstration mission entirely developed by SpaceLab UFSC students at the
            Federal University of Santa Catarina (UFSC), Brazil. It is cube-shaped satellite made of 5 modules.
              There the core modules for the mission control and the payloads. The core modules developed at UFSC are the
              On-Board Data Handling (OBDH), the Telemetry, Tracking, and Control (TT&C), the Electric Power System (EPS),
                and the passive Attitude Control System (ACS). The payload is an amateur radio repeater, which can be used
                all over the globe in emergency and rescue situations, for instance.
            </Text>
          </View>
        </View>

        <View>
          <View className=" m-5 mt-5 bg-secondary-700 p-2 rounded-xl">
          <Text className=" ml-2 text-2xl text-blue-600 font-bold">EPS</Text>
          <Text className=" ml-5 text-lg text-blue-300 font-semibold">Electric Power System</Text>
          <View className="flex-1 justify-center items-center m-5">
            <Image source={eps_img}
            className="w-64 h-64" />     
          </View>
          <Text className=" pl-2 text-lg text-blue-300 font-semibold">The module is designed to capture, store and distribute power to other FloripaSat-1 modules. 
                The power capture system is based on the conversion of solar energy through six panels located on 
                each face of the satellite structure. The captured energy is stored in two series-connected lithium batteries. 
                From decision-making algorithms, the other satellite modules are fed according to the available battery power at
                  a given time. EPS plays a key role in energy management at different times in orbit, such as when the satellite
                  is in eclipse, with the earth covering the sun.
            </Text>
          </View>
        </View>

        <View>
          <View className=" m-5 mt-5 bg-secondary-700 p-2 rounded-xl">
          <Text className=" ml-2 text-2xl text-blue-600 font-bold">TT&C</Text>
          <Text className=" ml-5 text-lg text-blue-300 font-semibold">Telemetry, Tracking and Command</Text>
          <View className="flex-1 justify-center items-center m-5">
            <Image source={ttc_img}
            className="w-64 h-64" />     
          </View>
          <Text className=" pl-2 text-lg text-blue-300 font-semibold">The module is responsible for satellite communication with the terrestrial segment.
                  It is divided into two sub-modules: “Beacon” and “Main Radio”. “Beacon” transmits periodic signals
                  containing satellite identification (ID) and basic telemetry information. “Main Radio” is responsible for
                  receiving remote controls from a control station located on Earth (in this case at the UFSC), and send responses
                    via telemetry. Received remotes are forwarded to OBDH, which performs decoding and the requested processing.
            </Text>
          </View>
        </View>

        <View>
          <View className=" m-5 mt-5 bg-secondary-700 p-2 rounded-xl">
          <Text className=" ml-2 text-2xl text-blue-600 font-bold">OBDH</Text>
          <Text className=" ml-5 text-lg text-blue-300 font-semibold">On-Board Data Handling</Text>
          <View className="flex-1 justify-center items-center m-5">
            <Image source={obdh_img}
            className="w-64 h-64" />     
          </View>
          <Text className=" pl-2 text-lg text-blue-300 font-semibold">The module is responsible for synchronizing actions and data flow between satellite modules (eg, EPS, Payloads, …) and the ground segment.
                  OBDH packs the generated data, and stores it in nonvolatile memory for sending to the ground station as soon as possible (when the satellite is passing over UFSC, or over a partner’s ground station). The remote commands sent by the ground segment are received by TT&C and sent to the OBDH which decodes and performs the necessary actions, sending the actions to the other modules if necessary. This allows communication between the entire satellite and the earth.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Overall