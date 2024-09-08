import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const MapScreen = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Here is the map screen</Text>
      </View>
    </SafeAreaProvider>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})