import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
//font
import FontFamily from './constants/FontFamily'
import FontSize from './styles/fonts/FontSize'

export default function App() {
  //load font
  const [loaded] = useFonts(FontFamily)

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
    fontFamily: 'Metropolis-semi-bold',
    fontSize: FontSize.$Headline
  }
})
