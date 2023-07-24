import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={change.box}>
      <Text style={change.text}>Drawer Profile</Text>
    </View>
  )
}

export default Profile

const change = StyleSheet.create({
  box: {
    marginTop: 40
  },
  text: {
    fontSize: 40
  }
})