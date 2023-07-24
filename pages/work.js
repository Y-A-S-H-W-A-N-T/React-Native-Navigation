import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from './card'
import { Model } from './model'

const Work = () => {
  return (
    <View>
      <Card>
        <ScrollView>
            <Text style={Model.text}>Eat</Text>
            <Text style={Model.text}>Sleep</Text>
            <Text style={Model.text}>Game</Text>
            <Text style={Model.text}>Gym</Text>
            <Text style={Model.text}>Code</Text>
            <Text style={Model.text}>Repeat</Text>
        </ScrollView>
      </Card>
    </View>
  )
}

export default Work