import '../../global.css'
import { Text, View } from 'react-native'
import React from 'react'
import TestAPI from '../components/test'

const signIn = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello, User!</Text>
      {/* <TestAPI/> */}
    </View>
  )
}

export default signIn

