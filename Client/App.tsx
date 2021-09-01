import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
//font family
import FontFaminly from './constants/FontFamily'
export default function App() {
  const [loaded] = useFonts(FontFaminly)
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
