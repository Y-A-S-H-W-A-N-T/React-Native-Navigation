import { View, Text, Button } from 'react-native'
import React from 'react'

const Test = ({ navigation }) => {
  return (
    <View>
      <Text>Working</Text>
      <Button title='Go To Navi' onPress={()=>navigation.pop(2)}/>
    </View>
  )
}

export default Test