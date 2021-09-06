import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from './styles/colors/Color'
import { useFonts } from 'expo-font'
//font
import FontSize from './styles/fonts/FontSize'
import FontFamily from './styles/fonts/FontFamily'

import SignUpScreen from './screens/Sign Up/index'
import RouterRoot from './routes/RouterRoot'

export default function App() {
  //load font
  const [loaded] = useFonts(FontFamily)

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      {/* <SignUpScreen /> */}
      <RouterRoot />
      <StatusBar style="light" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.$BackgroundDark
    //  justifyContent: 'center', /*disable code => visibility screen*/
    //  alignItems: 'center'
  },
  text: {
    fontSize: FontSize.$Headline
  }
})
