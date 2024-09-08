import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FloripaSat1 = () => {
  return (
    <SafeAreaView className="bg-primary">
      <Flatlist>
        <View>
          <View>
            <Text>FloripaSat-1</Text>
          </View>
        </View>
      </Flatlist>
    </SafeAreaView>
  )
}

export default FloripaSat1