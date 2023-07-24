import { View } from 'react-native'
import React from 'react'
import { Model } from './model'

const Card = (prop) => {
  return (
    <View style={Model.box}>  
        <View >
            {prop.children}
        </View>
    </View>
  )
}

export default Card