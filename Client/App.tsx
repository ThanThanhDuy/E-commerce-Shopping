import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from './styles/colors/Color'
import { useFonts } from 'expo-font'
//font
import FontSize from './styles/fonts/FontSize'
import FontFamily from './styles/fonts/FontFamily'

import RouterRoot from './routes/RouterRoot'
import { RecoilRoot } from 'recoil'

export default function App() {
  //load font
  const [loaded] = useFonts(FontFamily)

  if (!loaded) {
    return null
  }

  return (
    <RecoilRoot>
      <View style={styles.container}>
        <RouterRoot />
        <StatusBar style="light" />
      </View>
    </RecoilRoot>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.$BackgroundDark
  },
  text: {
    fontSize: FontSize.$Headline
  }
})
