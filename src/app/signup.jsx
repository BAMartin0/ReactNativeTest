import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import '../../global.css'
import TestAPI2 from '../components/test2'

const signup = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>signup</Text>
      <TestAPI2/>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})