import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from './styles/colors/Color'
import { useFonts } from 'expo-font'
//font
import FontSize from './styles/fonts/FontSize'
import FontFamily from './styles/fonts/FontFamily'

import SignUpScreen from './screens/Sign Up/index'

export default function App() {
  //load font
  const [loaded] = useFonts(FontFamily)

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SignUpScreen />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.$BackgroundDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: FontSize.$Headline
  }
})
