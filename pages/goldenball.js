import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from './model'

const Goldenball = ({ route }) => {

  const ball = route.params.ball

  return (
    <View style={change.back}>
      <Image source={images.ball[ball]} style={change.back}/>
      <Image source={images.ball[ball]} style={change.back}/>
    </View>
  )
}

export default Goldenball

const change = StyleSheet.create({
  back: {
    height: '70%',
    width: '100%',
  }
})