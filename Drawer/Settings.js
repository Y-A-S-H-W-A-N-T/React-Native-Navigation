import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={change.box}>
      <Text style={change.text}>Settings</Text>
    </View>
  )
}

export default Settings

const change = StyleSheet.create({
  box: {
    marginTop: 40
  },
  text: {
    fontSize: 40
  }
})