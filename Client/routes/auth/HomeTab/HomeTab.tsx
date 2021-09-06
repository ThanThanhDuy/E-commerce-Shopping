import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Home from '../../../screens/Home/index'

const HomeTabStack = createNativeStackNavigator()

const HomeTab = () => {
  return (
    <HomeTabStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeTabStack.Screen name="HomeMain" component={Home} />
    </HomeTabStack.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})
