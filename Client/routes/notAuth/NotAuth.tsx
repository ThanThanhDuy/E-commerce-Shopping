import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from '../../screens/Sign Up'
import LoginScreen from '../../screens/Login'

const NotAuthStack = createNativeStackNavigator()

const NotAuth = () => {
  return (
    <NotAuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="SignUp"
    >
      <NotAuthStack.Screen name="SignUp" component={SignUpScreen} />
      <NotAuthStack.Screen name="SignIn" component={LoginScreen} />
    </NotAuthStack.Navigator>
  )
}

export default NotAuth

const styles = StyleSheet.create({})
