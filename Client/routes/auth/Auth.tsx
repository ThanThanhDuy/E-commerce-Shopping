import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useRef } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon'
import Bag from '../../screens/Bag'
import Favorite from '../../screens/Favorite'
import Profile from '../../screens/Profile'
import Shop from '../../screens/Shop'
import Color from '../../styles/colors/Color'
import HomeTab from './HomeTab/HomeTab'

const AuthTab = createBottomTabNavigator()
const Auth = () => {
  const getWidth = () => {
    let width = Dimensions.get('window').width
    return width / 5
  }

  const tabOffsetValue: any = useRef(new Animated.Value(0)).current

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: Color.$BackgroundDark
      }}
    >
      <AuthTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'Home':
                return (
                  <TabBarIcon
                    focused={focused}
                    iconFill="home"
                    iconOutlined="home-outline"
                  />
                )
                break
              case 'Shop':
                return (
                  <TabBarIcon
                    focused={focused}
                    iconFill="shirt"
                    iconOutlined="shirt-outline"
                  />
                )
                break
              case 'Bag':
                return (
                  <TabBarIcon
                    focused={focused}
                    iconFill="cart"
                    iconOutlined="cart-outline"
                  />
                )
                break
              case 'Favorite':
                return (
                  <TabBarIcon
                    focused={focused}
                    iconFill="heart"
                    iconOutlined="heart-outline"
                  />
                )
                break
              case 'Profile':
                return (
                  <TabBarIcon
                    focused={focused}
                    iconFill="person"
                    iconOutlined="person-outline"
                  />
                )
                break
            }
          },
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarLabel: () => {
            return null
          }
        })}
      >
        <AuthTab.Screen
          name="Home"
          component={HomeTab}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start()
            }
          }}
        />
        <AuthTab.Screen
          name="Shop"
          component={Shop}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start()
            }
          }}
        />
        <AuthTab.Screen
          name="Bag"
          component={Bag}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true
              }).start()
            }
          }}
        />
        <AuthTab.Screen
          name="Favorite"
          component={Favorite}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start()
            }
          }}
        />
        <AuthTab.Screen
          name="Profile"
          component={Profile}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start()
            }
          }}
        />
      </AuthTab.Navigator>
      <Animated.View
        style={{
          height: 3,
          marginHorizontal: 20,
          position: 'absolute',
          bottom: 75,
          borderRadius: 50,
          width: getWidth() - 40,
          backgroundColor: Color.$PrimaryDark,
          transform: [
            {
              translateX: tabOffsetValue
            }
          ]
        }}
      />
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  tabBarLabel: {
    fontFamily: 'Poppins-medium'
  },
  tabBar: {
    backgroundColor: Color.$BackgroundDark,
    borderTopWidth: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: Color.$GrayDark,
    paddingTop: 10,
    height: 79,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13
  }
})
