import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {images} from '../constants';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 40
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full items-center justify-center flex-1">
          {/* Logo Section */}
          <View className="items-center mb-8">
            <Image 
              source={images.logoSmall}
              className="w-48 h-48 mb-6"
              resizeMode="contain"
            />
          </View>

          {/* Title Section */}
          <View className="items-center mb-8">
            <Text className="text-4xl font-pbold text-white text-center mb-2">
              NanoSatTracker
            </Text>
            <Text className="text-xl font-pmedium text-secondary text-center">
              Making Satellite Data Accessible
            </Text>
          </View>

          {/* Description Section */}
          <View className="items-center mb-8 px-4">
            <Text className="text-base font-pregular text-gray-100 text-center leading-6">
              Where Satellites and Data Converge: Understand space data like never before with NanoSatTracker.
            </Text>
          </View>

          {/* Button Section */}
          <View className="w-full mt-8">
            <CustomButton
              title="Continue"
              handlePress={() => router.push("/(auth)/sign-in")}
              containerStyles="w-full"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
};