import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
export default function App() {
  const [loaded] = useFonts({
    'Metropolis-regular': require('./assets/FontFamily/Metropolis-Regular.ttf'),
    'Metropolis-bold': require('./assets/FontFamily/Metropolis-Bold.ttf'),
    'Metropolis-semi-bold': require('./assets/FontFamily/Metropolis-SemiBold.ttf'),
    'Metropolis-medium': require('./assets/FontFamily/Metropolis-Medium.ttf')
  })
  if (!loaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Metropolis-semi-bold'
  }
})
