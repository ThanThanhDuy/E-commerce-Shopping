import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Color from '../../styles/colors/Color'

interface tabBarIconProps {
  focused: boolean
  iconFill: string
  iconOutlined: string
}

const TabBarIcon = ({ focused, iconFill, iconOutlined }: tabBarIconProps) => {
  return (
    <Icon
      name={focused ? iconFill : iconOutlined}
      type="ionicon"
      size={28}
      color={focused ? Color.$PrimaryDark : Color.$GrayDark}
    />
  )
}

export default TabBarIcon

const styles = StyleSheet.create({})
